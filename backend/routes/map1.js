import express from "express";
import Location from "../models/Location.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const MapLocation = require("./models/MapLocation");
  const mongoose = require("mongoose");
  require("dotenv").config();

  mongoose.connect(process.env.MONGO_URL).then(async () => {
    await MapLocation.insertMany([
      { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
      { name: "Chennai", lat: 13.0827, lng: 80.2707 },
      { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
    ]);

    console.log("Sample Data Inserted");
    process.exit();
  });

  const locations = await Location.find();
  res.json({
    apiKey: process.env.OLA_MAPS_API_KEY,
    locations,
  });
});

export default router;
