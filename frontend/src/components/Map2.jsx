import React, { useEffect, useState, useRef } from "react";

const Map2 = () => {
  const mapContainerRef = useRef(null);
  const [apiKey, setApiKey] = useState("");
  const [locations, setLocations] = useState([]);

  // Fetch API key and locations from backend
  const fetchMapData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/maps");
      const data = await res.json();
      setApiKey(data.apiKey);
      setLocations(data.locations);
    } catch (err) {
      console.error("Error fetching map data:", err);
    }
  };

  useEffect(() => {
    fetchMapData();
  }, []);

  useEffect(() => {
    if (apiKey && locations.length) {
      const map = new window.ola.maps.Map(mapContainerRef.current, {
        apiKey: apiKey,
        center: { lat: 12.9716, lng: 77.5946 }, // default center
        zoom: 12,
      });

      locations.forEach((location) => {
        new window.ola.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: location.name,
        });
      });
    }
  }, [apiKey, locations]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dynamic Ola Map</h2>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "500px", borderRadius: "10px" }}
      ></div>
    </div>
  );
};

export default Map2;
