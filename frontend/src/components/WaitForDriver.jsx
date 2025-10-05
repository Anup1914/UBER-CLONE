import React from "react";

const WaitForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="p-1 w-[93%] text-center absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          alt=""
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        ></img>
        <div className="text-right">
          <h2 className="text-lg font-medium">Anup</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">HR 36 AB 2430</h4>
          <p className="text-xm text-gray-600">Maruti Suzuki WagonR</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm mt-1 text-gray-600">
                Kankariya Talab, Delhi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm mt-1 text-gray-600">
                Kankariya Talab, Delhi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-medium">$2.05</h3>
              <p className="text-sm mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitForDriver;
