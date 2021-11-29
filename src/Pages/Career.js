// cover home career stack project contact
import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Career = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const handleWheel = (e) => {
    setCurrent(e.deltaY);
    if (current < 0) navigate("/home");
  };

  useEffect(() => {
    console.log(window);
    return () => {};
  }, []);
  return (
    <div className="content career" onWheel={handleWheel}>
      Career Pages
    </div>
  );
};

export default Career;
