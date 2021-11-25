import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";
import App from "./App";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id={projects.name}></div>
      
    </div>
  );
}

export default ProjectList;
