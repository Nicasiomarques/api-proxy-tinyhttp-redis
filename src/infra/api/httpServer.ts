export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};

export type HttpRequest = {
  body?: any;
  headers?: any;
  query?: any;
  params?: any;
};

export type THttpMethod = "get" | "post" | "put" | "patch" | "delete" | "options";

export const ok = (body: any) => ({
  statusCode: 200,
  body,
});

export type Controller = (request: HttpRequest) => Promise<HttpResponse>;

export type TMiddleware<TRequest = any, TResponse = any> = (
  req: TRequest,
  res: TResponse,
  next?: () => void
) => void | Promise<void>;

export interface IHttpServer {
  on(method: THttpMethod, path: string, callback: Controller): Promise<void>;
  listen(port: number, callback?: Function): void;
  use(middleware: TMiddleware): void ;
}
