import React from "react";
import { GoMarkGithub } from "react-icons/go";

const Project = ({ project }) => {
  const handleGithubClick = () => {
    window.open(project.github, "_blank");
  };
  return (
    <div>
      <div className="project">
        <img src={project.project_image} alt="AFL" className="project-image" />
        <div className="info">
          <div className="title">{project.title}</div>
          <GoMarkGithub
            size={30}
            onClick={handleGithubClick}
            className="project-github-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
