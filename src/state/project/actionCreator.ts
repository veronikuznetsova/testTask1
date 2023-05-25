import { projectApi } from "api/project.api";
import {
  getProject, getProjectLoading,
  getProjectById, getProjectByIdLoading, getProjectError, getProjectByIdError
} from "./projectSlice";

export const fetchProject = () => async (dispatch: any) => {
  dispatch(getProjectLoading(true));
  try {
    const res = await projectApi.getProject();
    dispatch(getProject(res));
  } catch (e: any) {
    dispatch(getProjectError(e.message));
    dispatch(getProjectLoading(false));
  }
};

export const fetchProjectById = (id: string) => async (dispatch: any) => {
  dispatch(getProjectByIdLoading(true));
  try {
    const res = await projectApi.getProjectById(id);
    dispatch(getProjectById(res));
  } catch (e: any) {
    dispatch(getProjectByIdError(e.message));
    dispatch(getProjectByIdLoading(false));
  }
};
