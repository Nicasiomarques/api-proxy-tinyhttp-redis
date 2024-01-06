export type HttpClientResponse<T = any> = { data?: T; statusCode: number };
type extendedOptions = RequestInit & { params?: Record<string, any> };
export type THttpClient = <T>(
  url: string,
  options?: extendedOptions
) => Promise<HttpClientResponse<T>>;

const handleResponse = (response: Response) =>
  response.ok ? response.json() : Promise.reject(response);

const allKeysRNil = (obj: Object) => obj ?? Object.entries(obj).every(([, value]) => !value)

const buildUrl = (url: string, params?: Record<string, string>) => {
  if (!params || allKeysRNil(params)) return url;
  return `${url}?${new URLSearchParams(Object.entries(params))}`;
};

export async function httpClient<T>(
  url: string,
  options: extendedOptions = { method: "GET" }
): Promise<HttpClientResponse<T>> {
  const hasBody = options?.method !== "GET" && options?.body;
  const finalUrl = buildUrl(url, options?.params);
  console.log(finalUrl) 
  const httpResponse = await fetch(finalUrl, {
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
