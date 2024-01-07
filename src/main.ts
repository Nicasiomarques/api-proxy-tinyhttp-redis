import { App } from "@tinyhttp/app";
import { cors } from "@tinyhttp/cors";
import { json } from "milliparsec";

import { Endpoint } from "@/constants";
import { getCacheOrSet } from "@/infra";
import { getPhotoOrAlbum } from "@/useCases";

const app = new App();
app.use(cors());
app.use(json());

app.get(Endpoint.Photos, async (request, response) => {
  const albumId = request.query.albumId as string;
  const photos = await getCacheOrSet(`photos?${albumId}`, () => getPhotoOrAlbum({ albumId }));
  return response.json(photos);
});

app.get(`${Endpoint.Photos}/:photoId`, async ({ params: { photoId } }, response) => {
  const photos = await getCacheOrSet(`photos:${photoId}`, () => getPhotoOrAlbum({ photoId }));
  return response.json(photos);
});

export default app;
