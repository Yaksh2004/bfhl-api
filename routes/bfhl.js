import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    res.status(200).json({
      is_success: true,
      message: "temp post success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: error.message,
    });
  }
});

export default router;
