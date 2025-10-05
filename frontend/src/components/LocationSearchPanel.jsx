import React from "react";

function LocationSearchPanel(props) {
  // smaple array for location

  const locations = [
    "24B, Near Kapoor's cafe, Coding School, Delhi",
    "22C, Near Hideout's cafe, Coding School,Delhi",
    "24C, Near Kapoor's cafe,Coding School, Delhi",
    "20B, Near Yadav's cafe, Coding School,Delhi",
  ];
  return (
    <div>
      {/* this is sample data */}
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 rounded-xl border-gray-100 active:border-black items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-7 w-10 flex items-center justify-center rounded-full">
              <i className="text-xl ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default LocationSearchPanel;
