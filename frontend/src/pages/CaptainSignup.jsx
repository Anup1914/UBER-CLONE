import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault;
    setCaptainData({
      fullName: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
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
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            ></input>
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="test"
              value={lastName}
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
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
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
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          ></input>
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm">
            Signup
          </button>
          <p className="text-center">
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
