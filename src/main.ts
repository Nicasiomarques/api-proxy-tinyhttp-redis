import { App } from "@tinyhttp/app";
import { cors } from "@tinyhttp/cors";

import { httpClient } from "./httpClient";
import { API_URL_PHOTOS, Endpoint, PORT } from "./constants";

const app = new App();
app.use(cors());

app.get(Endpoint.Photos, async ({ query: { albumId } }, response) => {
  const { data } = await httpClient(API_URL_PHOTOS, { params: { albumId } });
  return response.json(data);
});

app.get(`${Endpoint.Photos}/:id`, async ({ params: { id } }, response) => {
  const { data } = await httpClient(`${API_URL_PHOTOS}/${id}`);
  return response.json(data);
});

app.listen(PORT, () => console.log(`Started on http://localhost:${PORT}`));
