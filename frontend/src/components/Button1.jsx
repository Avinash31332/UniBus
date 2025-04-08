import React from "react";
import { Link } from "react-router-dom";
function Button1(props) {
  return (
    <div>
      <Link
        to={"/support"}
        className="w-[1/2] border-1 border-[#22181C] text-center p-2 rounded-lg text-[#22181C]"
      >
        <p>{props.title}</p>
      </Link>
    </div>
  );
}

export default Button1;
