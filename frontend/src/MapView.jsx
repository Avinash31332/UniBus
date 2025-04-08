import { useState, useEffect } from "react";

const MapView = () => {
  const [mapUrl, setMapUrl] = useState("");
  const [lat, setLat] = useState(12.93);
  const [lon, setLon] = useState(77.61);
  const [zoom, setZoom] = useState(15);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    setMapUrl(
      `http://localhost:5000/api/map?lat=${lat}&lon=${lon}&zoom=${zoom}&width=${width}&height=${height}`
    );
  }, [lat, lon, zoom, width, height]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Ola Maps View</h2>

      <div style={{ margin: "20px" }}>
        <input
          type="number"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          placeholder="Latitude"
        />
        <input
          type="number"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          placeholder="Longitude"
        />
        <input
          type="number"
          value={zoom}
          onChange={(e) => setZoom(e.target.value)}
          placeholder="Zoom"
        />
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Width"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height"
        />
      </div>

      {mapUrl ? (
        <img
          src={mapUrl}
          alt="Map loading..."
          style={{ border: "2px solid black" }}
        />
      ) : (
        <p>Loading Map...</p>
      )}
    </div>
  );
};

export default MapView;
