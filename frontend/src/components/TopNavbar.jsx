import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function TopNavbar() {
  return (
    <div className="w-full p-[5%] bg-[#E35064] text-2xl h-[60px] flex justify-between items-center text-[#22181C]">
      <FontAwesomeIcon
        icon={faBars}
        className="hover:text-[#F4E8EE] cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="hover:text-[#F4E8EE] cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faGear}
        className="hover:text-[#F4E8EE] cursor-pointer"
      />
    </div>
  );
}

export default TopNavbar;
