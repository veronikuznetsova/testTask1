import { Api } from "./api";

export const projectApi = {
  getProject: () =>
    Api.get({
      path: "init",
    }),
  getProjectById: (id: number) =>
  Api.get({
    path: "project/" + id,
  }),
};
