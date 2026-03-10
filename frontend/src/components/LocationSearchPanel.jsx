import React from "react";

function LocationSearchPanel({
  suggestions,
  setVehiclePanelOpen,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) {
  // smaple array for location

  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
      //setVehiclePanelOpen(true);
      //setPanelOpen(false);
    }
  };

  return (
    <div>
      {/* this is sample data */}
      {suggestions.map(function (elem, idx) {
        console.log(suggestions);
        return (
          <div
            key={idx}
            onClick={() => {
              handleSuggestionClick(elem.description);
            }}
            className="flex gap-4 border-2 p-3 rounded-xl border-gray-100 active:border-black items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-7 w-10 flex items-center justify-center rounded-full">
              <i className="text-xl ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{elem.description}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default LocationSearchPanel;
