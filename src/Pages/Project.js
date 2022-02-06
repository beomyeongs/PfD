// cover home career stack project contact
import React from "react";
import ProjectDetail from "Components/ProjectDetail";
import project from "Json/project";

const Project = () => {
  console.log(project);
  return (
    <div className="component project">
      <h1>프로젝트 목록</h1>
      <div>
        {project.map((data) => (
          <ProjectDetail project={data} />
        ))}
      </div>
    </div>
  );
};

export default Project;
