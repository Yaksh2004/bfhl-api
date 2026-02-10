import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));

const EMAIL = process.env.OFFICIAL_EMAIL;

app.get("/health", (req, res) => {
  return res.status(200).json({
    is_success: true,
    offical_email: EMAIL,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port", process.env.PORT || 3000);
});
