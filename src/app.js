import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database";
import chatRoutes from "./routes/chatRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat" , chatRoutes);
app.use("/api/user", userRoutes);

export default app;
