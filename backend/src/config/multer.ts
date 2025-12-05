import multer from "multer";
import path from "path";

// Guardar los archivos temporalmente en /uploads
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads/"); // carpeta temporal
  },
  filename: (_, file, cb) => {
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({ storage });
