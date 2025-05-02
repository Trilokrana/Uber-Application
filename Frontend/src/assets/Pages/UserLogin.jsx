import React, { useState } from "react";
import Google from "../../../public/Google.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, { email, password }]);
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full bg-black py-4 px-6">
        <h1 className="text-white text-4xl font-semibold tracking-widest">
          UBER
        </h1>
      </div>

      <form className="w-full max-w-md p-6" onSubmit={onSubmit}>
        <h1 className="text-lg  text-start mb-2">What's your email</h1>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          style={{ backgroundColor: "#E8E8E8" }}
        />
        <h1 className="text-lg  text-start mb-2">Enter your password</h1>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          style={{ backgroundColor: "#E8E8E8" }}
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
          New here ?{" "}
          <Link
            to="/user-signup"
            className="text-blue-400 font-bold hover:underline "
          >
            Create an account
          </Link>
        </p>

        <Link to={"/captain-login"}>
          <button className="bg-green-600 w-full text-white rounded-lg py-2 mb-3 font-semibold">
            Sign in as Captain
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;
