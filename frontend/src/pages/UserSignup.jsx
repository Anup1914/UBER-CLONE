import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault;
    setUserData({
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
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        ></img>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="font-medium text-base mb-2">What's your name</h3>
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
          <h3 className="font-medium text-base mb-2">What's your email</h3>
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
            <Link to="/user-login" className="text-blue-600 ">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
