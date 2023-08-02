import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Components/Main";
import MySkills from "../Components/MySkills";
import Experience from "../Components/Experience";
import About from "../Components/About";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/experience" element={<Experience />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
