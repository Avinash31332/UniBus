import React from "react";

function BusNumber(props) {
  const data = props.data;
  return (
    <div>
      <div className="flex w-full p-4 bg-gray-200 my-2 justify-between items-center rounded">
        <p className="text-lg">Bus Number</p>
        <p className="rounded-[10px] px-4 h-[50px] border-2 bg-[#E35064] text-[#F4E8EE] flex items-center justify-center">
          {data.busNumber}
        </p>
      </div>
    </div>
  );
}

export default BusNumber;
