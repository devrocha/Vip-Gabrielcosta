import { createRouter } from "./routes/routes.js";
import { app, startServer } from "./config/server.js";

const instanceExpress = app

startServer()

createRouter(instanceExpress)