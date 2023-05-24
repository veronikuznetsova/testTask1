import { IProjectItem } from "state/project/types";

export const calculateBoundingBox = (item: IProjectItem) => {
    const radians = (item.rotation * Math.PI) / 180;
    const cos = Math.abs(Math.cos(radians));
    const sin = Math.abs(Math.sin(radians));
    const width = item.width * cos + item.height * sin;
    const height = item.width * sin + item.height * cos;
    const x = item.x - width / 2;
    const y = item.y - height / 2;
    return { x, y, width, height };
  };