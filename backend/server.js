import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiTripRoute from "./routes/aiTrip.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", aiTripRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Safarnama backend running on http://localhost:${PORT}`);
});