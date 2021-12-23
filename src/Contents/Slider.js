import React, { useState, useEffect } from "react";
import useCurrentPage from "../Hooks/useCurrentPage";
const Slider = ({ children }) => {
  const [active, setActive] = useState(0);
  const { currentPage, setCurrentPage } = useCurrentPage();
  const goPrev = () => {
    console.log(currentPage);
    if (currentPage >= 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const goNext = () => {
    console.log(currentPage);
    if (currentPage < children.length - 1) {
      setCurrentPage((prev) => prev + 1);
      setActive("active");
    }
    console.log(active);
  };
  useEffect(() => {
    console.log("useEffect");
    console.log(currentPage);
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
      }, 1000);
    });
    return () => {};
  }, [currentPage]);

  const toTop = () => {
    setCurrentPage(0);
  };

  const percentage = -100 * currentPage + "%";
  console.log(currentPage);
  // if (active > 6) {
  // }
  if (currentPage > 6) {
    alert("마지막페이지");
  }
  return (
    <div>
      <div
        className="slides"
        style={{ transform: `translate3d(0, ${percentage}, 0)` }}
      >
        {children.map((child, index) => {
          if (index === currentPage) {
            return React.cloneElement(child, {
              className: child.props.className + " active",
            });
          }
          return child;
        })}
      </div>
      <div className="buttons">
        <button onClick={goPrev} disabled={currentPage === 0}>
          &uarr; Previous Slide
        </button>
        <button onClick={goNext} disabled={currentPage === children.length - 1}>
          Next Slide &darr;
        </button>
        {currentPage > 0 && <button onClick={toTop}>맨 위로 올라가기</button>}
      </div>
      <ul className="dots">
        {children.map((child, index) => (
          <li className={index === currentPage ? "active" : ""}>
            {child.type.name}
            {/* {child.props.className.split(" ")[0]} */}
            <button onClick={() => setCurrentPage(index)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
