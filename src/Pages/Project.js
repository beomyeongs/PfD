// cover home career stack project contact
import React from "react";
import ProjectDetail from "Components/ProjectDetail";
import project from "Json/project";

const Project = () => {
  return (
    <div className="">
      <h1>프로젝트 목록</h1>
      <div className="">
        <ProjectDetail project={project.one} />
        <ProjectDetail project={project.two} />
        <ProjectDetail project={project.three} />
      </div>
    </div>
  );
};

export default Project;
