import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBusSimple, faUser } from "@fortawesome/free-solid-svg-icons";

function BottomNavbar() {
  return (
    <div className="w-full p-[5%] bg-[#E35064] text-2xl h-[60px] flex justify-between items-center text-[#22181C]">
      <FontAwesomeIcon
        icon={faHome}
        className="hover:text-[#F4E8EE] cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faBusSimple}
        className="hover:text-[#F4E8EE] cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faUser}
        className="hover:text-[#F4E8EE] cursor-pointer"
      />
    </div>
  );
}

export default BottomNavbar;
