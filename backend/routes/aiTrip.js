import express from "express";
import generateTrip from "../controllers/aiTripController.js";

const router = express.Router();

router.post("/ai-trip", generateTrip);

export default router;