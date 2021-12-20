import React, { useState, useEffect } from "react";

const Slider = ({ children }) => {
  const [active, setActive] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    let timer;
    window.addEventListener("wheel", (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (e.deltaY > 0) {
          goNext();
        } else {
          goPrev();
        }
      }, 500);
    });
    return () => {};
  }, []);
  const goPrev = () => {
    console.log(active);
    if (active >= 0) {
      setActive((prev) => prev - 1);
    }
  };
  const goNext = () => {
    console.log(active);
    if (active < children.length - 1) {
      setActive((prev) => prev + 1);
    }
  };
  const toTop = () => {
    setActive(0);
  };

  const percentage = -100 * active + "%";
  console.log(active);
  // if (active > 6) {
  // }
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
