import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { motion, reverseEasing } from "framer-motion";
function LoginPage() {
  return (
    <div>
      {/* <motion.div
        initial={{ opacity: 0, y: 0, x: 150 }}
        animate={{ opacity: 0.75, y: -20 }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        className="bottom-[-50px] bg-yellow-300 rounded-[50%] w-[100px] h-[100px] absolute"
      />
      <motion.div
        initial={{ opacity: 0, y: 0, x: 100 }}
        animate={{ opacity: 0.75, y: -10 }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        className="bottom-[-50px] bg-red-300 rounded-[50%] w-[100px] h-[100px] absolute"
      />
      <motion.div
        initial={{ opacity: 0, y: 0, x: 150 }}
        animate={{ opacity: 0.75, y: -20 }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        className="bottom-[-50px] bg-yellow-300 rounded-[50%] w-[100px] h-[100px] absolute"
      /> */}
      <div className="realtive text-xl flex flex-col gap-[20px] items-center p-[30px] rounded h-screen">
        <div className="flex flex-col items-center">
          <p className="mt-[30px] text-3xl font-medium">Welcome</p>
          <p className="text-[18px]">Login to access your account</p>
        </div>
        <div className="mt-[20px] flex flex-col gap-[15px]">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            placeholder="username"
            className="border-1 rounded-4xl p-2 px-[30px] outline-0 border-gray-500"
          />
        </div>
        <div className="mt-[5px] flex flex-col gap-[15px]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="border-1 rounded-4xl p-2 px-[30px] outline-0 border-gray-500 w-full"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-[15px]">
          <p className="text-[16px]">Forget Password?</p>
          <button className="bg-[#F06543] p-3 w-[90%] rounded-4xl text-[#F6E8EA]">
            Login
          </button>
        </div>
        <div
          className="w-full flex  flex-col items-center
        justify-center"
        >
          <p className="w-full flex justify-center m-4 px-4 py-1 text-[16px] options-1">
            Or sign in with
          </p>
          <div className="m-2 flex flex-col gap-[10px]">
            <p className="border-1 border-gray-700 p-2 rounded-4xl px-8 hover:bg-[#2D2229] hover:text-gray-200 cursor-pointer">
              <FontAwesomeIcon icon={faGoogle} className="px-2" />
              Google
            </p>
          </div>
        </div>
        <div
          className="relative w-full flex  flex-col items-center
        justify-center"
        >
          <p className="w-full flex justify-center m-4 px-4 py-1 text-[16px] options-1">
            If you are an admin
          </p>
          <div className="text-[18px] m-2 flex flex-col gap-[10px] items-center">
            <p className="border-1 border-[#2D2229] p-2 rounded-4xl px-8 bg-[#2D2229] hover:bg-white text-gray-200 hover:text-[#2D2229] cursor-pointer">
              Go to Admin Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
