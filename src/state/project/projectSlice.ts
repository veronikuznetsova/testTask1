import { createSlice } from "@reduxjs/toolkit";
import { IProjectState } from "./types";

const initialState: IProjectState = {
  getProjectLoading: false,
  getProjectByIdLoading: false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getProject: (state, action) => {
      state.project = action.payload;
      state.getProjectLoading = false;
      state.error = null;
    },
    getProjectLoading: (state, action) => {
      state.getProjectLoading = action.payload;
    },
    getProjectError: (state, action) => {
      state.error = action.payload;
      state.getProjectLoading = false;
    },
    getProjectById: (state, action) => {
      state.projectById = action.payload;
      state.getProjectByIdLoading = false;
      state.error = null;
    },
    getProjectByIdLoading: (state, action) => {
      state.getProjectByIdLoading = action.payload;
    },
    getProjectByIdError: (state, action) => {
      state.error = action.payload;
      state.projectById = undefined;
      state.project = undefined;
      state.getProjectByIdLoading = false;
    },
  },
});

export const {
  getProject,
  getProjectLoading,
  getProjectError,
  getProjectById,
  getProjectByIdLoading,
  getProjectByIdError
} = projectSlice.actions;

export default projectSlice.reducer;
