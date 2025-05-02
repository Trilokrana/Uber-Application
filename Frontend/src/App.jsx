import React, { useContext } from "react";
import Home from "./assets/Pages/Home";
import UserLogin from "./assets/Pages/UserLogin";
import UserSignUp from "./assets/Pages/UserSignUp";
import CaptainSignUp from "./assets/Pages/CaptainSignUp";
import CaptainLogin from "./assets/Pages/CaptainLogin";
import { Routes, Route } from "react-router-dom";
import { UserDataContext } from "./context/UserContext";

const App = () => {
  const context = useContext(UserDataContext);
  console.log(context);
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
    </main>
  );
};

export default App;
