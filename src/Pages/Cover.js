// cover home career stack project contact
import React, { useState } from "react";
import { useNavigate } from "react-router";
const Cover = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  console.log("커버지나갑니다.");
  const handleWheel = (e) => {
    // e.preventDefault();
    console.log("휠이벤트");
    console.log(e.deltaY);
    // setCurrent(e);
    if (current > 0) navigate("/home");
  };
  const handleScroll = (e) => {
    console.log("스크롤이벤트");
    console.log(e);
  };
  return (
    <div
      className="content cover"
      onWheel={handleWheel}
      onScroll={handleScroll}
    >
      Cover Pages
    </div>
  );
};

export default Cover;
