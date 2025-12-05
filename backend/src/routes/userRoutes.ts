import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController.ts";

const router = Router();

router.post("/register", createUser);      // Registrar usuario
router.post("/login", loginUser);  // Login

export default router;
