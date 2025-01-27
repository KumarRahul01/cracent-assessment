import express from "express";
import userRoutes from "./routes/user.routes.js";
import { rateLimit } from 'express-rate-limit'
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    res.status(429).json({
      message: 'Too many requests received, please try again later',
      retryAfter: "60 seconds"
    });
  }
})

// middlewares
app.use(limiter);
app.use(cors());

// Routes Middleware 
app.use("/v1", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running successfully!" });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})