import "./loadEnv.ts";
import express from "express";

import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.ts";
import collectionRoutes from "./routes/collectionRoutes.ts";
import { notFound, errorHandler } from "./middleware/errorMiddleware.ts";
import userRoutes from "./routes/userRoutes.ts";


// Conectar DB
connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(helmet());
app.use(express.json());

// Rutas
app.use("/collections", collectionRoutes);
app.use("/users", userRoutes);

// Health check
app.get("/", (_, res) => res.send("Mostrador API OK"));

app.use(notFound);
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
