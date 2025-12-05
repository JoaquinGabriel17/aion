import express from "express";
import { upload } from "../config/multer.ts";
import {
  uploadImages,
  createCollection,
  getCollectionsByUserId
} from "../controllers/collectionController.ts";

const router = express.Router();

router.post("/create", createCollection);
router.post("/:id/photos", upload.array("images", 10), uploadImages);
router.get("/:userId", getCollectionsByUserId);

export default router;
