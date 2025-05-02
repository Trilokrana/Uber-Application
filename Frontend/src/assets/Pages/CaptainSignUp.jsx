import React, { useState } from "react";
import Google from "../../../public/Google.png";
import { Link } from "react-router-dom";
import UBER from "../../../public/UBER.png";
const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setCaptainData((prev) => ({
      ...prev,
      firstName,
      lastName,
      email,
    }));
    console.log({ firstName, lastName, email, password });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full bg-black py-4 px-6">
        <h1 className="text-white text-4xl font-semibold tracking-widest">
          UBER
        </h1>
        {/* <img src={UBER} alt="uber-logo" /> */}
      </div>

      <form className="w-full max-w-md p-6" onSubmit={onSubmit}>
        <h1 className="text-lg  text-start mb-2">What's our captain's name</h1>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="bg-[#E8E8E8] w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="bg-[#E8E8E8] w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <h1 className="text-lg  text-start mb-2">What's our captain's email</h1>
        <input
          type="text"
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="bg-[#E8E8E8] w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <h1 className="text-lg  text-start mb-2">Enter Password</h1>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="bg-[#E8E8E8] w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button className="bg-black w-full text-white rounded-lg py-2 mb-3">
          Sign Up
        </button>

        <div className="flex items-center justify-center mb-3">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <p className="text-center text-gray-700 text-sm font-medium mb-4">
          Already have an account ?{" "}
          <Link
            to="/captain-login"
            className="text-blue-400 font-bold hover:underline"
          >
            Login here
          </Link>
        </p>

        <p className="text-xs text-gray-500 text-center">
          By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS
          messages, including by automated means, from Uber and its affiliates
          to the number provided.
        </p>
      </form>
    </div>
  );
};

export default CaptainSignUp;
