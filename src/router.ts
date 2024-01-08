import { IHttpServer } from '@/adapters/httpPorts';
import  { getAllPhotos, getPhotosById } from '@/controllers/photos';
import { Endpoint } from '@/constants';

export const initRoutes = (router: IHttpServer) => {
  router.on('get',Endpoint.Photos, getAllPhotos);
  router.on('get',`${Endpoint.Photos}/:photoId`, getPhotosById);
}
