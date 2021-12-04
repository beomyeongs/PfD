import React, { useState, useEffect } from "react";

const Slider = ({ children }) => {
  const [active, setActive] = useState(0);
  const goPrev = () => {
    if (active >= 0) {
      setActive((prev) => prev - 1);
    }
  };
  const goNext = () => {
    if (active < children.length - 1) {
      setActive((prev) => prev + 1);
    }
  };
  const percentage = -100 * active + "%";
  console.log(children.length);
  const handleScroll = (e) => {
    // console.log(e.deltaY);
    // e.preventDefault();
    // e.deltaY > 0 ? goNext() : goPrev();
    const scrollY = window.scrollY;
    console.log(scrollY);
  };
  console.log(children);

  return (
    <div>
      <div
        onScroll={handleScroll}
        className="slides"
        style={{ transform: `translate3d(0, ${percentage}, 0)` }}
      >
        {children.map((child, index) => {
          if (index === active) {
            return React.cloneElement(child, {
              className: child.props.className + " active",
            });
          }
          return child;
        })}
      </div>
      <div className="buttons">
        <button onClick={goPrev} disabled={active === 0}>
          &uarr; Previous Slide
        </button>
        <button onClick={goNext} disabled={active === children.length - 1}>
          Next Slide &darr;
        </button>
      </div>
      <ul className="dots">
        {children.map((child, index) => (
          <li className={index === active ? "active" : ""}>
            {child.type.name}
            {/* {child.props.className.split(" ")[0]} */}
            <button onClick={() => setActive(index)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
