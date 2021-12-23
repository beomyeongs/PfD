import { useState, useEffect, useRef } from "react";
import { RecoilRoot } from "recoil";
import Dots from "./Dots";

import "./App.css";
import Slider from "Contents/Slider";
import Cover from "Pages/Cover";
import Home from "Pages/Home";
import Career from "Pages/Career";
import Stack from "Pages/Stack";
import Project from "Pages/Project";
import Contact from "Pages/Contact";
// const DIVIDER_HEIGHT = 5;

function App() {
  return (
    <RecoilRoot>
      <Slider>
        <Cover />
        <Home />
        <Career />
        <Stack />
        <Project />
        <Contact />
      </Slider>
    </RecoilRoot>
  );
}

export default App;
