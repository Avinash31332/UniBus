import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mapRoute from "./routes/mapRoute.js";
import db from "./config/db.js";
import map1 from "./routes/map1.js";
db();
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", mapRoute);
app.use("/api/maps", map1);
app.get("/", () => {
  const apiKey = process.env.OLA_MAP_API_KEY;
  console.log(apiKey);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
