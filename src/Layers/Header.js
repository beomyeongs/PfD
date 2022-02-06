import React from "react";

const Header = ({ onPageChange }) => {
  // console.log(onPageChange);
  const handlePageChange = (num) => {
    onPageChange(num);
  };
  return (
    <nav>
      <button className="block" onClick={() => handlePageChange(0)}>
        cover
      </button>
      <button className="block" onClick={() => handlePageChange(1)}>
        career
      </button>
      <button className="block" onClick={() => handlePageChange(2)}>
        stack
      </button>
      <button className="block" onClick={() => handlePageChange(3)}>
        project
      </button>
      <button className="block" onClick={() => handlePageChange(4)}>
        contact
      </button>
    </nav>
  );
};

export default Header;
