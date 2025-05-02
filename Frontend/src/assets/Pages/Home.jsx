import React from "react";
import tafficlight from "../../../public/traffice-light.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen flex flex-col">
      <div className="relative flex-1">
        <img
          src={tafficlight}
          alt="traffic-light"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-5">
          <h1 className="text-white text-5xl font-bold">Uber</h1>
        </div>
      </div>
      <div className="bg-white py-5 px-6">
        <h2 className="text-3xl text-center font-bold">
          Get Started With Uber
        </h2>
        <Link to={"/user-login"}>
          <button className="mt-4 w-full bg-black text-white rounded-4xl px-10 py-2">
            Continue
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
