import { createSlice } from "@reduxjs/toolkit";
import { IProjectState } from "./types";

const initialState: IProjectState = {
  getProjectLoading: false,
  getProjectByIdLoading: false
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getProject: (state, action) => {
      state.project = action.payload;
      state.getProjectLoading = false;
    },
    getProjectLoading: (state, action) => {
      state.getProjectLoading = action.payload;
    },
    getProjectById: (state, action) => {
      state.projectById = action.payload;
      state.getProjectByIdLoading = false;
    },
    getProjectByIdLoading: (state, action) => {
      state.getProjectByIdLoading = action.payload;
    },
  },
});

export const {
  getProject, getProjectLoading,
  getProjectById, getProjectByIdLoading
} = projectSlice.actions;

export default projectSlice.reducer;
