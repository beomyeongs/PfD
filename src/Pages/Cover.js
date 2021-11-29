// cover home career stack project contact
import React, { useState } from "react";
import { useNavigate } from "react-router";
const Cover = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const handleWheel = (e) => {
    console.log(e);
    setCurrent(e.deltaY);
    if (current > 0) navigate("/home");
  };
  return (
    <div className="content cover" onWheel={handleWheel}>
      Cover Pages
    </div>
  );
};

export default Cover;
