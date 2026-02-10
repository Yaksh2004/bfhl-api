import express from "express";
import { fibonacci, getPrimes, lcmArray, hcfArray } from "../utils/math.js";

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
    const value = req.body[key];

    let data;

    switch (key) {
      case "fibonacci":
        data = fibonacci(value);
        break;
      case "prime":
        data = getPrimes(value);
        break;
      case "lcm":
        data = lcmArray(value);
        break;
      case "hcf":
        data = hcfArray(value);
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
