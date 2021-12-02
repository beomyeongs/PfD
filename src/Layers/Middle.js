import React from "react";
// import stylesd from "styled-components";
import "Layers/Middle.scss";
import Cover from "Pages/Cover";
import Home from "Pages/Home";
import Career from "Pages/Career";
import Stack from "Pages/Stack";
import Project from "Pages/Project";
import Contact from "Pages/Contact";
import Sidebar from "Layers/Sidebar";

// const MiddleDiv = styled.div`
//   div {
//     height: 100vh;
//   }
// `;

const Middle = () => {
  return (
    <div className="middle">
      <Cover id="1">
        <h2>1</h2>
        <p>content</p>
      </Cover>
      {/* <Home id="2">
        <h2>2</h2>
        <p>content</p>
      </Home> */}
      {/* <Career id="3">
        <h2>3</h2>
        <p>content</p>
      </Career>
      <Stack id="4">
        <h2>4</h2>
        <p>content</p>
      </Stack>
      <Project>
        <h2>5</h2>
        <p>content</p>
      </Project>
      <Contact>
        <h2>6</h2>
        <p>content</p>
      </Contact> */}
    </div>
  );
};

export default Middle;
