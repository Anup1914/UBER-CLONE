import React from "react";

function VehiclePanel(props) {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-1 w-[93%] text-center absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a ride</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full border-2 mb-2 active:border-black rounded-xl p-3 items-center justify-between"
      >
        <img
          className="h-12"
          alt=""
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        ></img>
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$2.05</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full border-2 mb-2 active:border-black rounded-xl p-3 items-center justify-between"
      >
        <img
          className="h-12"
          alt=""
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
        ></img>
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$1.45</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full border-2 mb-2 active:border-black rounded-xl p-3 items-center justify-between"
      >
        <img
          className="h-12"
          alt=""
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        ></img>
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$0.95</h2>
      </div>
    </div>
  );
}

export default VehiclePanel;
