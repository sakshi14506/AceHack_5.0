import express from "express";
import cors from "cors";
import aiTripRoutes from "./routes/aiTrip.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Safarnama API running");
});

app.use("/api", aiTripRoutes);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`🚀 Safarnama backend running on http://localhost:${PORT}`);
});