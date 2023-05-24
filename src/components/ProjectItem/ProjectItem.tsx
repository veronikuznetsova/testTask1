import React from "react";
import { IProjectItem } from "state/project/types";
import { calculateBoundingBox } from "utils/boundingBox/boundingBox";

const ProjectItem: React.FC<{ item: IProjectItem }> = ({ item }) => {
  const boundingBox = calculateBoundingBox(item);
  const rotationPoint = { x: item.x, y: item.y };
  const textPoint = { x: item.x + 5, y: item.y - 5 };

  return (
    <g>
      {item.type === "rectangle" && (
        <rect
          id={item.id}
          x={item.x - item.width / 2}
          y={item.y - item.height / 2}
          width={item.width}
          height={item.height}
          fill={item.color}
          transform={`rotate(${item.rotation} ${item.x} ${item.y})`}
        />
      )}
      {item.type === "ellipse" && (
        <ellipse
          id={item.id}
          cx={item.x}
          cy={item.y}
          rx={item.width / 2}
          ry={item.height / 2}
          fill={item.color}
          transform={`rotate(${item.rotation} ${item.x} ${item.y})`}
        />
      )}
      {boundingBox && (
        <>
          <circle
            cx={rotationPoint.x}
            cy={rotationPoint.y}
            r={4}
            fill="#FFFFFF"
          />
          <text x={textPoint.x} y={textPoint.y} fill="#FFFFFF">
            <tspan>{`${item.rotation}°`}</tspan>
          </text>
          <rect
            x={boundingBox.x}
            y={boundingBox.y}
            width={boundingBox.width}
            height={boundingBox.height}
            fill="none"
            stroke="#FF0000"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
        </>
      )}
    </g>
  );
};

export default ProjectItem;
