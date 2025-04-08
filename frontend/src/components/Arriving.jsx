import React, { useState } from "react";

function Arriving(props) {
  const data = props.data;
  const location = data.nextStop;
  const [textLimit, setTextLimit] = useState(35);
  const timeText = data.eta;
  return (
    <div>
      <div className="rounded w-full flex flex-col gap-[5px] px-4 mt-[10px] bg-gray-200 text-[#F4E8EE] py-4 my-2 gap-[20px] font-medium">
        <p className="text-[#2D2229]">Next Stop:</p>
        <p className="bg-[#E35064] p-2 rounded-lg">
          {location.length >= textLimit
            ? location.slice(0, textLimit) + "..."
            : location}
        </p>
      </div>

      <div className="rounded w-full flex items-center gap-[5px] px-4 mt-[10px] bg-gray-200 text-[#F4E8EE] py-4 my-2 gap-[20px] font-medium">
        <p className="text-[#2D2229]">Estimated TIme:</p>
        <p className="bg-[#E35064] p-2 rounded-lg">{timeText}</p>
        <p className="bg-[#E35064] p-2 rounded-lg">10min left</p>
      </div>
    </div>
  );
}

export default Arriving;
