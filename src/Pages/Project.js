// cover home career stack project contact
import React, { useState } from "react";
import ProjectDetail from "Components/ProjectDetail";
import project from "Json/project";

const Project = () => {
  return <ProjectDetail project={project.one} />;
};

export default Project;
