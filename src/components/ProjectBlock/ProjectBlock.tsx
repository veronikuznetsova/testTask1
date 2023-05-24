import React from "react";
import ProjectItem from "components/ProjectItem/ProjectItem";
import { IProjectItem } from "state/project/types";
import { ProjectBlockProps } from "./types";

const ProjectBlock: React.FC<ProjectBlockProps> = ({ projectData }) => {
  const { width, height, items } = projectData.project;

  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      width="100%"
      height="80vh"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      {items.map((item: IProjectItem) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </svg>
  );
};

export default ProjectBlock;
