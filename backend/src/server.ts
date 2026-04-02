import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import passport from "./passport";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://meritum-lab-1-tjfc.vercel.app",
    credentials: true,
  }),
);
app.use(express.json());
app.use(passport.initialize());
// Routes
app.use("/auth", authRoutes);

// Connect DB + Start server
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log("Server running on port " + process.env.PORT),
    );
  })
  .catch((err) => console.error(err));
