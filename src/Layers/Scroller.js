import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Header from "Layers/Header";
import Cover from "../Pages/Cover";
import Career from "../Pages/Career";
import Stack from "../Pages/Stack";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Progress from "Layers/Progress";

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
      <Progress page={currentPage} />
      <Header onPageChange={handlePageChange} />
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
    </div>
  );
};

export default Scroller;
