export async function http(path: string, config: RequestInit): Promise<string> {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  config.headers = { "Content-Type": "application/json" };

  return fetch(`${baseUrl + path}`, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    })
    .catch((error) => error.message);
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
