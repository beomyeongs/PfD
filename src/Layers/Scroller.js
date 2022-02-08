import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Dots from "Layers/Dots";
import Cover from "../Pages/Cover";
import Career from "../Pages/Career";
import Stack from "../Pages/Stack";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
const Scroller = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };
  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  return (
    <div className="scroller">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Cover />
        <Career />
        <Stack />
        <Project />
        <Contact />
      </ReactPageScroller>
      <Dots onPageChange={handlePageChange} pageNum={currentPage} />
    </div>
  );
};

export default Scroller;
