import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBusSimple,
  faUser,
  faUserGroup,
  faRightFromBracket,
  faHeadset,
  faBus,
  faMagnifyingGlass,
  faBars,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function HomeLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="relative container h-[100vh] w-full flex flex-col">
        <div className="fixed top-0 z-[1] w-full p-[5%] bg-[#E35064] text-2xl h-[60px] flex justify-between items-center text-gray-100">
          Driver Interface
        </div>

        {/* middle content */}
        <div className="fixed bottom-0 z-[1] w-full p-[5%] bg-[#E35064] text-2xl h-[60px] flex justify-between items-center text-gray-100">
          <FontAwesomeIcon
            icon={faBars}
            className="hover:text-[#F4E8EE] cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <Link to={"/driver-home"}>
            <FontAwesomeIcon
              icon={faHome}
              className="hover:text-[#F4E8EE] cursor-pointer"
            />
          </Link>
          <Link to={"/all-buses"}>
            <FontAwesomeIcon
              icon={faBusSimple}
              className="hover:text-[#F4E8EE] cursor-pointer"
            />
          </Link>
          <Link to={"/search"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="hover:text-[#F4E8EE] cursor-pointer"
            />
          </Link>
          <Link to={"/profile"}>
            <FontAwesomeIcon
              icon={faUser}
              className="hover:text-[#F4E8EE] cursor-pointer"
            />
          </Link>
        </div>

        <Outlet />

        {/* Bottom Navbar */}
        <div className="fixed bottom-0 z-[1] w-full p-[5%] bg-[#E35064] text-2xl h-[60px] flex justify-between items-center text-gray-100">
          <FontAwesomeIcon
            icon={faBars}
            className="hover:text-[#F4E8EE] cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <Link to={"/"}>
            <FontAwesomeIcon
              icon={faHome}
              className="hover:text-[#F4E8EE] cursor-pointer"
            />
          </Link>

          <Link to={"/search"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="hover:text-[#F4E8EE] cursor-pointer"
            />
          </Link>
          <Link to={"/driver-profile"}>
            <FontAwesomeIcon
              icon={faUser}
              className="hover:text-[#F4E8EE] cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed ${
          showSidebar ? "left-[5px]" : "left-[-300px]"
        } transition-all duration-300 bottom-[70px] w-6/10 h-auto z-[999] py-4 flex flex-col text-center text-[18px] sidebar px-4 bg-[#E35064] text-gray-100 rounded-xl shadow-xl`}
      >
        <Link
          to="/support"
          className="flex gap-[10px] justify-center items-center w-full sidebar-items p-2 py-4"
        >
          <p>Logo</p>
        </Link>

        <Link
          to="/driver-profile"
          className="flex gap-[10px] items-center w-full sidebar-items"
        >
          <div className="bg-gray-200 w-[50px] h-[50px] rounded-full"></div>
          <p>Name</p>
        </Link>

        <Link
          to="/all-buses"
          className="w-full sidebar-items flex justify-start gap-[10px] items-center"
        >
          <FontAwesomeIcon icon={faBus} />
          All Buses
        </Link>

        <Link
          to="/support"
          className="w-full sidebar-items flex justify-start gap-[10px] items-center"
        >
          <FontAwesomeIcon icon={faUserGroup} />
          All Drivers
        </Link>

        <Link
          to="/support"
          className="w-full sidebar-items flex justify-start gap-[10px] items-center"
        >
          <FontAwesomeIcon icon={faHeadset} />
          Support
        </Link>

        <Link
          to="/settings"
          className="w-full sidebar-items flex justify-start gap-[10px] items-center"
        >
          <FontAwesomeIcon icon={faGear} />
          Settings
        </Link>

        <Link
          to="/pre-login"
          className="w-full sidebar-items flex justify-start gap-[10px] items-center"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </Link>
      </div>
    </>
  );
}

export default HomeLayout;
