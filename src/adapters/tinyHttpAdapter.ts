import { Request, Response } from "@tinyhttp/app";

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError= 500,
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

export const ok = (body: any) => ({
  statusCode: 200,
  body,
})

export type Controller = (request: HttpRequest) => Promise<HttpResponse>;

export const tinyHttpAdaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = { ...request };
    const httpResponse = await controller(httpRequest);
    return response.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
