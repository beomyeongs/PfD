// cover home career stack project contact
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  console.log("홈지나갑니다");
  const handleWheel = (e) => {
    // e.preventDefault();
    console.log(e);
    console.log(e.deltaY);
    setCurrent(e.deltaY);
    if (current > 0) navigate("/career");
    if (current < 0) navigate("/");
  };
  // useEffect(() => {
  // window.removeEventListener("scroll");
  // }, []);
  return (
    <div className="content home" onWheel={handleWheel}>
      Home Pages
    </div>
  );
};

export default Home;
