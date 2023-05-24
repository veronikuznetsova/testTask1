import { Api } from "./api";

export const projectApi = {
  getProject: () =>
    Api.get({
      path: "init",
    }),
  getProjectById: (id: string) =>
  Api.get({
    path: "project/" + id,
  }),
};
