import React from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <div className="relative w-full h-screen p-4 flex flex-col items-center">
        <div className="mt-16 mb-4 bg-gray-200 rounded-[50%] w-[200px] h-[200px]"></div>
        <div>
          <p>Name</p>
          <p>Email</p>
        </div>
        <div className="m-[20px] flex flex-col w-full gap-[20px] absolute bottom-[40px] p-4">
          <Link
            to={"/support"}
            className="w-full border-1 border-[#22181C] text-center p-2 rounded-lg text-[#22181C]"
          >
            <p>Get Support</p>
          </Link>
          <Link
            to={"/my-permissions"}
            className="w-full border-1 border-[#22181C] text-center p-2 rounded-lg text-[#22181C]"
          >
            <p>My Permissions</p>
          </Link>
          <Link
            to={"/pre-login"}
            className="w-full bg-[#E35064] text-center p-2 rounded-lg text-[#F6E8EA]"
          >
            <p>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
