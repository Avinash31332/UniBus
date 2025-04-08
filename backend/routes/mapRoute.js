import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/map", async (req, res) => {
  const { lat, lon, zoom, width, height } = req.query;

  if (!lat || !lon || !zoom || !width || !height) {
    return res.status(400).json({ message: "Missing query parameters" });
  }

  const apiKey = process.env.OLA_MAP_API_KEY;
  console.log(apiKey);
  const mapUrl = `https://api.olamaps.io/tiles/v1/styles/default-light-standard/static/${lon},${lat},${zoom}/${width}x${height}.png?api_key=${apiKey}`;

  console.log("Requesting Map from:", mapUrl);

  try {
    const response = await axios.get(mapUrl, { responseType: "arraybuffer" });
    res.set("Content-Type", "image/png");
    res.send(response.data);
  } catch (error) {
    console.error("Map Fetch Error:", error);
    res.status(500).json({ message: "Error fetching map" });
  }
});

export default router;
