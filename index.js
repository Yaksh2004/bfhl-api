import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import bfhlRoutes from "./routes/bfhl.js";
import healthRoutes from "./routes/health.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port", process.env.PORT || 3000);
});
