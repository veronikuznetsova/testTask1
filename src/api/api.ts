export async function http(path: string, config: RequestInit): Promise<string> {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  config.headers = {
    ...config.headers,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json; charset=utf-8",
    "Connection": "keep-alive",
  };

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
