import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Map1 from "./Map1";
// Optional custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MiniMap() {
  return (
    <div className="rounded-lg w-full h-[400px] overflow-hidden">
      {/* leaflet */}
      {/* <MapContainer
        center={[28.6139, 77.209]} // Delhi coords
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[28.6139, 77.209]} icon={customIcon}>
          <Popup>Delhi - Your Location</Popup>
        </Marker>
      </MapContainer> */}
      <Map1 />
    </div>
  );
}

export default MiniMap;
