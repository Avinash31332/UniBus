import React from "react";
import { Bus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
const AllBusesPage = () => {
  const buses = [
    { id: 1, name: "College Bus 1", route: "City A to College" },
    { id: 2, name: "College Bus 2", route: "City B to College" },
    { id: 3, name: "College Bus 3", route: "City C to College" },
  ];

  return (
    <div className="p-4 bg-[#f9fafb] min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3 text-[#1e293b]">
        <Bus className="w-7 h-7 text-[#E35064]" /> All Buses
      </h2>

      <div className="grid gap-4">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="border border-[#e2e8f0] rounded-2xl p-5 shadow-sm hover:shadow-lg transition text-gray-200 bg-[#E35064] flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{bus.name}</h3>
              <p className="mt-1 text-gray-300">{bus.route}</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="text-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBusesPage;
