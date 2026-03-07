import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiTripRoutes from "./routes/aiTrip.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Safarnama Backend Running");
});

app.use("/api/ai", aiTripRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Safarnama backend running on http://localhost:${PORT}`);
});