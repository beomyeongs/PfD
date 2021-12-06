import React, { useState, useEffect } from "react";

const Slider = ({ children }) => {
  const [active, setActive] = useState(0);
  const [pageNum, setPageNum] = useState();
  const [direction, setDirection] = useState("");
  const goPrev = () => {
    if (active >= 0) {
      setActive((prev) => prev - 1);
    }
  };
  const goNext = () => {
    if (active < children.length - 1) {
      setActive((prev) => prev + 1);
    }
    console.log(active);
  };
  const toTop = () => {
    setActive(0);
  };
  const percentage = -100 * active + "%";

  let timer;

  window.addEventListener("wheel", (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (e.deltaY > 0) {
        //scroll wheel down
        if (direction !== "down") {
          console.log("down");
          setDirection("down");

          goNext();
        }
      } else {
        //scroll wheel up
        if (direction !== "up") {
          console.log("up");
          setDirection("up");

          goPrev();
        }
      }
    }, 500);
  });

  return (
    <div>
      <div
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
        {active > 0 && <button onClick={toTop}>맨 위로 올라가기</button>}
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
