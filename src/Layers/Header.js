import React from "react";

const Header = ({ onPageChange }) => {
  // console.log(onPageChange);
  const handlePageChange = (num) => {
    console.log(num);
    onPageChange(num);
  };
  return (
    <nav>
      <button className="block" onClick={() => handlePageChange(0)}>
        cover
      </button>
      <button className="block" onClick={() => handlePageChange(1)}>
        home
      </button>
      <button className="block" onClick={() => handlePageChange(2)}>
        career
      </button>
      <button className="block" onClick={() => handlePageChange(3)}>
        stack
      </button>
      <button className="block" onClick={() => handlePageChange(4)}>
        project
      </button>
      <button className="block" onClick={() => handlePageChange(5)}>
        contact
      </button>
    </nav>
  );
};

export default Header;
