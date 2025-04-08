import React, { useState } from "react";
import Button1 from "../components/Button1";

function DriverDetails(props) {
  const data = props.data;
  const driver = {
    name: data.driverName,
    number: data.driverNumber,
  };

  const nameLimit = 30;

  return (
    <div>
      <div className="flex bg-gray-200 p-4 rounded-lg items-center gap-[10px]">
        <div className="rounded-full w-[50px] h-[50px] bg-gray-300" />
        <div>
          <p>
            {driver.name.length > nameLimit
              ? `${driver.name.slice(0, nameLimit)}...`
              : driver.name}
          </p>
          <p>{driver.number}</p>
        </div>
      </div>

      <p className="my-16 w-[1/2] border-1 border-[#22181C] text-center p-2 rounded-lg text-[#22181C]">
        Get Support
      </p>
    </div>
  );
}

export default DriverDetails;
