import { useEffect } from "react";
import { Link } from "react-router-dom";

function PreLoginPage() {
  useEffect(() => {
    // This will run once when the component is mounted
    console.log("PreLoginPage component mounted");
  }, []); // Empty dependency array means this effect will only run once when the component mounts.

  return (
    <div>
      <div className=" bg-[#F6E8EA] relative w-full h-screen flex flex-col items-center justify-start">
        {/* image div */}
        <div className="w-full h-6/10"></div>
        <div className="absolute bottom-0 bg-[#F06543] flex flex-col items-center text-gray-100 justify-center h-4/10 preLoginPage-2">
          <p className="text-4xl font-medium">UniBus</p>
          <p className="text-xl font-medium">Never miss your bus again</p>
          <p className="text-center my-[20px]">
            Real-time tracking means you're always one step ahead, never miss
            your campus bus again.
          </p>
          <Link
            to={"/login"}
            className="bg-gray-100 text-[#F06543] py-4 px-16 text-2xl rounded-xl border-1 border-gray-100"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PreLoginPage;
