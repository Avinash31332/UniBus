import React from "react";
import Bus from "../components/Bus";

function HomePage() {
  const data = {
    collegeName: "CMR COLLEGE OF ENGINEERING AND TECHNOLOGY",
    busNumber: 23,
    nextStop: "kandlakoya,Hyderabad,India",
    eta: "11:00am",
    driverName: "Avinash",
    driverNumber: 8885337199,
  };

  return (
    <div>
      <Bus data={data} />
    </div>
  );
}

export default HomePage;
