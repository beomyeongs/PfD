// cover home career stack project contact
import React from "react";

const Stack = () => {
  const scroll = (e) => {
    console.log(e);
  };
  return (
    <div className="content stack" onScroll={(e) => scroll(e)}>
      Stack pages
    </div>
  );
};

export default Stack;
