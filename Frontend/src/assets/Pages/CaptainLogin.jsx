import React, { useState } from "react";
import Google from "../../../public/Google.png";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setCaptainData((prev) => [...prev, { email, password }]);
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full bg-black py-4 px-6">
        <h1 className="text-white text-4xl font-semibold tracking-widest">
          UBER {" "}
        </h1>
      </div>

      <form className="w-full max-w-md p-6" onSubmit={onSubmit}>
        <h1 className="text-lg  text-start mb-2">What's your email</h1>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="bg-[#E8E8E8] w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <h1 className="text-lg  text-start mb-2">Enter your password</h1>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
          className="bg-[#E8E8E8] w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button className="bg-black w-full text-white rounded-lg py-2 mb-3">
          Login
        </button>

        <div className="flex items-center justify-center mb-3">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 mb-4 hover:bg-gray-200">
          <img src={Google} alt="Google" className="w-8 h-8 mr-2" />
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-200">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-5 h-6 mr-2"
          />
          Continue with Apple
        </button>

        <div className="flex items-center justify-center my-3">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* New Text */}
        <p className="text-center text-gray-700 text-sm font-medium mb-4">
          Want to drive with Uber ?{" "}
          <Link
            to="/captain-signup"
            className="text-blue-400 font-bold hover:underline "
          >
            Register as a Captain
          </Link>
        </p>

        <Link to={"/user-login"}>
          <button className="bg-amber-600 w-full text-white rounded-lg py-2 mb-3 font-semibold">
            Sign in as User
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CaptainLogin;
