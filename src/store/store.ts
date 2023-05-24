import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "state/project/projectSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;