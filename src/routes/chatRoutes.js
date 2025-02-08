import express from "express";
import { chatWithAI } from "../controllers/chatController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post("/" , authMiddleware , chatWithAI);

export default router;
