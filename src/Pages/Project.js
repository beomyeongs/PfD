import React, { useState } from "react";
import ProjectDetail from "Components/ProjectDetail";
import project from "Json/project";
import "../Css/Project.scss";
import ArrowBtn from "Components/ArrowBtn";
import TechGraph from "Components/TechGraph";
const Project = () => {
  console.log(project);
  console.log(project);
  // const project = _project;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("right");
  const lastPage = parseInt(project.length / 4);
  const empthyContent = project.length % 4;
  for (let i = 0; i < empthyContent; i++) {
    project.push({ name: "", content: "", tech_stack: "", did: "" });
  }

  return (
    <div className="project">
      <div className="project__slider">
        <div className="project__slider__container">
          {lastPage > 1 && (
            <>
              <ArrowBtn
                page={page}
                setPage={setPage}
                setDirection={setDirection}
                lastPage={lastPage}
              />
            </>
          )}

          {page === 0 ? (
            <TechGraph />
          ) : (
            <div className="project__slider__container__item">
              {project.map((data, index) => (
                <>
                  {parseInt(index / 4) === page - 1 && (
                    <ProjectDetail project={data} />
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
