import React, { useEffect } from "react";
import { OlaMaps } from "olamaps-web-sdk";

const Map1 = () => {
  useEffect(() => {
    const olaMaps = new OlaMaps({
      apiKey: import.meta.env.VITE_OLA_MAPS_API_KEY,
    });

    const myMap = olaMaps.init({
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      container: "map", // this should be id of your div
      center: [77.61648476788898, 12.931423492103944],
      zoom: 15,
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <div id="map" className="w-full h-full"></div>
    </div>
  );
};

export default Map1;
