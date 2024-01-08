import { cors } from "@tinyhttp/cors";
import { json } from "milliparsec";

import { tinyHttpAdapter } from '@/adapters/tinyHttp'
import { initRoutes } from "@/router";

const app = tinyHttpAdapter();
app.use(cors());
app.use(json() as any); // fix this

initRoutes(app)

export default app;
