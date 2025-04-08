import React from "react";
import BusNumber from "../components/BusNumber";
import Arriving from "../components/Arriving";
import MiniMap from "../components/MiniMap";
import DriverDetails from "../components/DriverDetails";

function Bus(props) {
  const data = props.data;
  return (
    <div className="w-full h-[auto] p-4 my-16 flex flex-col gap-[10px]">
      {/* college and arriving details */}
      <div>
        <p className="font-medium text-center">{data.collegeName}</p>
      </div>
      <BusNumber data={data} />
      {/* map container */}
      <MiniMap />
      <div className="flex flex-col w-full">
        {/* bus details */}
        <Arriving data={data} />
        {/* driver details */}
        <p className="m-2 text-lg">Driver Details</p>
        <DriverDetails data={data} />
      </div>
    </div>
  );
}

export default Bus;
