import { type App } from '@tinyhttp/app'

import { tinyHttpAdaptRoute } from '@/adapters/tinyHttpAdapter';
import  { getAllPhotos, getPhotosById } from '@/controllers/photos';
import { Endpoint } from '@/constants';

export const initRoutes = (router: App) => {
  router.get(Endpoint.Photos, tinyHttpAdaptRoute(getAllPhotos));
  router.get(`${Endpoint.Photos}/:photoId`, tinyHttpAdaptRoute(getPhotosById));
}
