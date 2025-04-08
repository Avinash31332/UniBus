import React, { useState, useEffect } from "react";

const DriversHomePage = () => {
  const [locationAllowed, setLocationAllowed] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => {
        setLocationAllowed(true);
        setShowContent(true);
      },
      () => {
        setLocationAllowed(false);
        setShowContent(true);
      }
    );
  }, []);

  if (!showContent) return null;

  const toggleLocationAccess = () => {
    setLocationAllowed(!locationAllowed);
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Driver's Homepage</h1>

      {locationAllowed === true && (
        <p className="text-green-600 font-semibold">
          Your device location is tracking.
        </p>
      )}

      {locationAllowed === false && (
        <p className="text-red-600 font-semibold">
          Allow location access for tracking.
        </p>
      )}

      <button
        onClick={toggleLocationAccess}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Toggle Location Access
      </button>
    </div>
  );
};

export default DriversHomePage;
