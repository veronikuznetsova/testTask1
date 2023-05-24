import { projectApi } from "api/project.api";
import {
  getProject, getProjectLoading,
  getProjectById, getProjectByIdLoading
} from "./projectSlice";

export const fetchProject = () => async (dispatch: any) => {
  dispatch(getProjectLoading(true));
  try {
    const res = await projectApi.getProject();
    dispatch(getProject(res));
  } catch (e) {
    dispatch(getProjectLoading(false));
  }
};

export const fetchProjectById = (id: number) => async (dispatch: any) => {
  dispatch(getProjectByIdLoading(true));
  try {
    const res = await projectApi.getProjectById(id);
    dispatch(getProjectById(res));
  } catch (e) {
    dispatch(getProjectByIdLoading(false));
  }
};
