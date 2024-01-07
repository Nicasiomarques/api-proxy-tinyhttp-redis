import { App } from "@tinyhttp/app";
import { cors } from "@tinyhttp/cors";
import { json } from "milliparsec";

import { initRoutes } from "@/router";

const app = new App();
app.use(cors());
app.use(json());

initRoutes(app)

export default app;
