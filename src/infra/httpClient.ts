import { isNullOrEmpty } from "@/helpers";

export type HttpClientResponse<T = any> = { data?: T; statusCode: number };
type extendedOptions = RequestInit & { params?: Record<string, any> };
export type THttpClient = <T>(
  url: string,
  options?: extendedOptions
) => Promise<HttpClientResponse<T>>;

const handleResponse = (response: Response) =>
  response.ok ? response.json() : Promise.reject(response);

function objectToQueryParam(obj?: Record<string, any>): string {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (!isNullOrEmpty(value)) params.append(key, String(value));
    }
  }
  return params.toString();
}

export async function httpClient<T>(
  url: string,
  options: extendedOptions = { method: "GET" }
): Promise<HttpClientResponse<T>> {
  const hasBody = options?.method !== "GET" && options?.body;
  const urlParams = objectToQueryParam(options?.params)
  const httpResponse = await fetch(`${url}?${urlParams}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    ...(hasBody && { body: JSON.stringify(options.body) }),
  }).catch(error => error);

  return {
    data: (await handleResponse(httpResponse)) as T,
    statusCode: httpResponse.status,
  };
}
