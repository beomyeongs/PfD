import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Header from "Layers/Header";
import Footer from "./Footer";
import Cover from "../Pages/Cover";
import Home from "../Pages/Home";
import Career from "../Pages/Career";
import Stack from "../Pages/Stack";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
const Scroller = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handlePageChange = (number) => {
    console.log("페이지변경됨");
    setCurrentPage(number);
    if (number === 5) setIsFooterVisible(true);
    else setIsFooterVisible(false);
    console.log(isFooterVisible);
  };
  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  return (
    <div>
      <Header onPageChange={handlePageChange} />
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Cover />
        <Home />
        <Career />
        <Stack />
        <Project />
        <Contact />
      </ReactPageScroller>
      {isFooterVisible && <Footer />}
    </div>
  );
};

export default Scroller;
