import { makePhotoGatewayHttp } from "@/infra/gateway/photoGatewayHttp";
import { PhotoController } from "@/module/photo";
import { httpClient } from "@/infra";

export const photoGateway = () => makePhotoGatewayHttp(httpClient)
export const controllerPhoto = () => PhotoController(photoGateway())
