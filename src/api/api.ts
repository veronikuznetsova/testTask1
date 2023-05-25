import { validateProjectItems } from "utils/boundingBox/validateProjectItems";

export async function http(path: string, config: RequestInit): Promise<string> {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

    return fetch(`${baseUrl}${path}`, config)
    .then(async(response) => {
      if (response.ok) {
        const json = await response.json();
        const isValid = json?.project?.items ? validateProjectItems(json?.project?.items) : true;

        if (isValid) {
          return json;
        } else {
          throw new Error('API data contains invalid items');
        }
      } else {
        const json = await response.json();
          const message = json.message;
        if (response.status === 500 || response.status === 404) {
          throw new Error(message === "I have failed you" ? "Something went wrong" : message);
        } else {
          throw new Error(message);
        }
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  
  }

interface IRequest {
  path: string;
  config?: RequestInit;
  body?: Object;
}

export class Api {
  static async get({ path, config }: IRequest): Promise<string> {
    const init = { method: "get", ...config };
    return http(path, init);
  }
}
