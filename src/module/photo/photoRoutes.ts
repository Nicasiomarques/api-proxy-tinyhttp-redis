import { controllerPhoto } from "@/rootComposition";
import { IHttpServer } from "@/infra/api";
import { Endpoint } from "@/constants";

export const initPhotoRoutes = (router: IHttpServer) => {
  const { getAll, getById } = controllerPhoto()
  
  router.on('get', Endpoint.Photos, getAll)
  router.on('get', `${Endpoint.Photos}/:photoId`, getById)
}
