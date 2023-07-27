import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Components/Main";
import MySkills from "../Components/MySkills";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="/skills" element={<MySkills />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
