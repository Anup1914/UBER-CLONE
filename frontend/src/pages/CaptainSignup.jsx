import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptain
    );

    if (res.status === 201) {
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehicleType("");
    setVehiclePlate("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-6"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
        ></img>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="font-medium text-base mb-2">
            What's our Captain's name
          </h3>
          <div className="flex gap-4 mb-4">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            ></input>
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="test"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            ></input>
          </div>
          <h3 className="font-medium text-base mb-2">
            What's our Captain's email
          </h3>
          <input
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@gmail.com"
          ></input>
          <h3 className="font-medium text-base mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          ></input>
          <h3 className="font-medium text-base mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-2">
            <input
              className="bg-[#eeeeee] w-1/2 mb-3 rounded-lg px-4 py-2 border text-base placeholder:text-sm"
              required
              type="text"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              placeholder="Vehicle Color"
            ></input>
            <input
              className="bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              required
              type="text"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              placeholder="Vehicle Plate"
            ></input>
          </div>
          <div className="flex gap-4 mb-2">
            <input
              className="bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              required
              type="text"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              placeholder="Vehicle Capacity"
            ></input>
            <select
              className="bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-1/2 text-base"
              required
              type="text"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="moto">moto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-base placeholder:text-sm">
            Create Captain Account
          </button>
          <p className="text-center mb-7">
            Already have an Account?
            <Link to="/captain-login" className="text-blue-600 ">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
