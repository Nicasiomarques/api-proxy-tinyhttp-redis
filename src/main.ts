import { cors } from "@tinyhttp/cors";
import { json } from "milliparsec";

import { initPhotoRoutes } from '@/module/photo'
import { tinyHttpAdapter } from '@/infra/api'

const app = tinyHttpAdapter();
app.use(cors());
app.use(json() as any); // fix this

initPhotoRoutes(app)

export default app;
