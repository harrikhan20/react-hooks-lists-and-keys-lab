import React from "react";
import user from "../data/user";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      
      <div className={technologies}>
        <span>{technologies.name}</span>
        
      </div>
    </div>
  );
}

export default ProjectItem;
