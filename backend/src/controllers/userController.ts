import express from "express";
import type { Request, Response } from "express";
import { User } from "../models/User.ts";
import { generateToken } from "../utils/generateToken.ts";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ error: "Nombre y contraseña son obligatorios" });
    }

    const exists = await User.findOne({ name });
    if (exists) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    const user = await User.create({ name, password });

    return res.status(201).json({
      id: user._id,
      name: user.name,
      token: generateToken(user._id.toString()),
    });
  } catch (error) {
    console.error("Error creando usuario:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ error: "Nombre y contraseña obligatorios" });
    }

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    return res.json({
      id: user._id,
      name: user.name,
      token: generateToken(user._id.toString()),
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error interno en el servidor" });
  }
};
