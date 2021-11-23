import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "Pages/Cover";
import Home from "Pages/Home";
import Career from "Pages/Career";
import Stack from "Pages/Stack";
import Project from "Pages/Project";
import Contact from "Pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Cover />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/stack" element={<Stack />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
