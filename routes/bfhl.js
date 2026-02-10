import express from "express";
import { fibonacci } from "../utils/math.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const keys = Object.keys(req.body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        error: "Exactly one key is allowed",
      });
    }

    const key = keys[0];

    let data;

    switch (key) {
      case "fibonacci":
        data = fibonacci(req.body[key]);
        break;
      case "is_prime":
        data = isPrime(req.body[key]);
        break;
      default:
        return res.status(400).json({
          is_success: false,
          error: "Invalid key",
        });
    }

    res.status(200).json({
      is_success: true,
      offical_mail: process.env.OFFICIAL_EMAIL,
      data,
    });
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: error.message,
    });
  }
});

export default router;
