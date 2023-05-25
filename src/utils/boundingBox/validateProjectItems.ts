import { IProjectItem } from "state/project/types";

export const validateProjectItems = (items: IProjectItem[]): boolean => {
    for (const item of items) {
        if (!isValidId(item.id) ||
            !isValidType(item.type) ||
            !isValidColor(item.color) ||
            !isValidRotation(item.rotation) ||
            !isValidCoordinate(item.x) ||
            !isValidCoordinate(item.y) ||
            !isValidWidthAndHeight(item.width, item.height)) {
          return false;
        }
      }
      return true;
  }

  const isValidId = (id: string): boolean => {
    return id.length > 0;
  };
  
  const isValidType = (type: 'rectangle' | 'ellipse'): boolean => {
    return type === 'rectangle' || type === 'ellipse';
  };
  
  const isValidColor = (color: string): boolean => {
    return /^#[0-9A-Fa-f]{6}$/.test(color);
  };
  
  const isValidRotation = (rotation: number): boolean => {
    return rotation >= 0 && rotation <= 360;
  };
  
  const isValidCoordinate = (coordinate: number): boolean => {
    return Number.isInteger(coordinate);
  };

  const isValidWidthAndHeight = (width: number, height: number): boolean => {
    return width > 0 && height > 0;
  };
  