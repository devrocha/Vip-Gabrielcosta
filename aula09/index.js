import { createRouter } from "./routes/routes.js";
import { app, startServer } from "./config/servidor.js";

const instanceExpress = app

createRouter(instanceExpress)
startServer()
