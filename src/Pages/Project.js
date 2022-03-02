// cover home career stack project contact
import React, { useState } from "react";
import ProjectDetail from "Components/ProjectDetail";
import project from "Json/project";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../Css/Project.scss";
import ArrowBtn from "Components/ArrowBtn";
const Project = () => {
  console.log(project);
  // const project = _project;
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState("right");
  const lastPage = parseInt(project.length / 4);
  const empthyContent = project.length % 4;
  for (let i = 0; i < empthyContent; i++) {
    project.push({ name: "", content: "", tech_stack: "", did: "" });
  }
  console.log(lastPage);
  console.log(empthyContent, "empthy");
  return (
    <div className="project">
      <div className="slider">
        <div className="container">
          <div className="item">
            {project.map((data, index) => (
              <>
                {parseInt(index / 4) === page - 1 && (
                  <ProjectDetail project={data} />
                )}
              </>
            ))}
          </div>
          {lastPage > 1 && (
            <>
              <h1>
                ({page} / {lastPage})
              </h1>
              <ArrowBtn
                page={page}
                setPage={setPage}
                setDirection={setDirection}
                lastPage={lastPage}
              />
            </>
          )}
        </div>
      </div>
      {/* <button
        className="arrow left"
        onClick={() => {
          setPage(page - 1);
          setDirection("left");
        }}
        disabled={page === 1}
      >
        <FaAngleLeft size="100px" />
      </button>

      <button
        className="arrow right"
        onClick={() => {
          setPage(page + 1);
          setDirection("right");
        }}
        disabled={page === lastPage}
      >
        <FaAngleRight size="100px" />
      </button> */}
    </div>
  );
};

export default Project;
