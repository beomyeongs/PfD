import CareerCard from "Components/CareerCard";
import React, { useState, useEffect } from "react";
import "Css/Career.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import career from "../Json/career.json";
import ArrowBtn from "Components/ArrowBtn";
const Career = (props) => {
  const [page, setPage] = useState(1);
  const lastPage = parseInt(career.length / 3) + 1;
  const [direction, setDirection] = useState("right");
  useEffect(() => {
    setPage(1);
    console.log("렌더링됨");
    return () => {};
  }, []);

  return (
    <div className="career">
      <h1>
        활동 이력 ({page} / {lastPage})
      </h1>

      <ArrowBtn
        page={page}
        setPage={setPage}
        setDirection={setDirection}
        lastPage={lastPage}
      />
      <div className="career__section">
        {career.map((d, index) => (
          <>
            {index < page * 3 && index >= (page - 1) * 3 && (
              <CareerCard
                name={d.name}
                term={d.term}
                text={d.text}
                direction={direction}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Career;
