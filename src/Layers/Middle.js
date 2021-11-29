import React from "react";
import styled from "styled-components";
import "Layers/Middle.scss";
const MiddleDiv = styled.div`
  div {
    height: 100vh;
  }
`;

const Middle = () => {
  return (
    <div className="middle">
      <div id="1">
        <h2>day 1</h2>
        <p>content</p>
      </div>
      <div id="2">
        <h2>day 2</h2>
        <p>content</p>
      </div>
      <div id="3">
        <h2>day 3</h2>
        <p>content</p>
      </div>
      <div id="4">
        <h2>day 4</h2>
        <p>content</p>
      </div>
    </div>
  );
};

export default Middle;
