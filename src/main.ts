import { App } from "@tinyhttp/app";
import { cors } from "@tinyhttp/cors";

import { Endpoint } from "@/constants";
import { getCacheOrSet } from "@/infra";
import { getPhotoAlbum } from "@/useCases";

const app = new App();
app.use(cors());

app.get(Endpoint.Photos, async (request, response) => {
  const albumId = request.query.albumId as string;
  const photos = await getCacheOrSet(`photos?${albumId}`, () => getPhotoAlbum({ albumId }));
  return response.json(photos);
});

app.get(`${Endpoint.Photos}/:photoId`, async ({ params: { photoId } }, response) => {
  const photos = await getCacheOrSet(`photos:${photoId}`, async () => getPhotoAlbum({ photoId }));
  return response.json(photos);
});

export default app;
