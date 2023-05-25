import { IProjectItem } from "state/project/types";

export const validateProjectItems = (items: IProjectItem[]): boolean => {
    for (const item of items) {
      if (item.width <= 0 || item.height <= 0) {
        return false;
      }
    }
    return true;
  }