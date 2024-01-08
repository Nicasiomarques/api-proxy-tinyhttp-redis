import { Request, Response, App } from "@tinyhttp/app";

import { Controller, HttpRequest, IHttpServer, THttpMethod, TMiddleware } from "./httpPorts";

export const tinyHttpAdapter = (): IHttpServer => {
  const server = new App();

  const listen = (port: number, callback: Function) => {
    server.listen(port)
    callback()
  };
  
  const use = (middleware: TMiddleware<Request, Response>) => server.use(middleware);

  const on = async (method: THttpMethod, url: string, controller: Controller) => {
    server[method](url, async (request: Request, response: Response) => {
      const httpRequest: HttpRequest = { ...request };
      const httpResponse = await controller(httpRequest);
      response.status(httpResponse.statusCode).json(httpResponse);
    });
  };

  return {
    use,
    listen,
    on,
  };
};
