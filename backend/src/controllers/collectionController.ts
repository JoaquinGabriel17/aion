import express from "express";
import type { Request, Response } from "express";
import { Collection } from "../models/Collection.ts";
import { User } from "../models/User.ts";
import cloudinary from "../config/cloudinary.ts";

// SUBIR IMÁGENES A CLOUDINARY
export const uploadImages = async (req: Request, res: Response) => {
  try {
    const collectionId = req.params.id;

    if (!collectionId) {
      return res.status(400).json({ error: "Falta el ID de la colección" });
    }

     // Validar formato de ObjectId
    if (!collectionId || collectionId.length !== 24) {
      return res.status(400).json({ error: "ID inválido" });
    }

    // 1. Verificar si existe la colección
    const collection = await Collection.findById(collectionId);

    if (!collection) {
      return res.status(404).json({ error: "Colección no encontrada" });
    }

    // 2. Obtener archivos
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No se enviaron archivos" });
    }

    // 2. Subir imágenes a Cloudinary
    const uploads = await Promise.all(
      files.map((file) =>
        cloudinary.uploader.upload(file.path, {
          folder: "aion",
        })
      )
    );

    // 3. Preparar las fotos para Mongo
    const photos = uploads.map((img) => ({
      url: img.secure_url,
      filename: img.public_id,
    }));

    // 4. Guardar en la DB
    collection.photos.push(...photos);
    await collection.save();

    res.json({
      message: "Imágenes subidas y agregadas a la colección.",
      collection,
    });
  } catch (error: any) {
    console.error("Error subiendo imágenes:", error);
    res.status(500).json({ error: error.message });
  }
};


// CREAR UNA NUEVA COLECCIÓN
export const createCollection = async (req: Request, res: Response) => {
  try {
    const { name, description, userId } = req.body;

    if (!name || !userId) {
      return res.status(400).json({
        error: "Los campos 'name' y 'userId' son obligatorios."
      });
    }

    // Validar formato de ObjectId
    if (!userId || userId.length !== 24) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const user = await User.findById(userId);
    if(!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const newCollection = new Collection({
      userId,
      name,
      description,
      createdBy: user.name,
      photos: [], // vacío al crear
      createdAt: new Date()
    });

    await newCollection.save();

    res.status(201).json({
      message: "Colección creada correctamente",
      collection: newCollection
    });

  } catch (error) {
    console.error("Error al crear colección:", error);
    res.status(500).json({ error: "Error al crear la colección" });
  }
};

// OBTENER COLECCIÓN POR ID DE USUARIO
export const getCollectionsByUserId  = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "Falta el userId en la solicitud" });
    }

    // Validar formato de ObjectId
    if (!userId || userId.length !== 24) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const collections = await Collection.find({ userId });

    if (!collections) {
      return res.status(404).json({ error: "No se encontraron colecciones con el ID de usuario ingresado" });
    }

    return res.status(200).json({
      message: "Colecciones obtenidas correctamente",
      data: collections,
    });
  } catch (error: any) {
    console.error("Error obteniendo colección:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};