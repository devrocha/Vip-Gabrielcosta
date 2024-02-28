import express, { json } from "express";
import { main } from "./startDb.js";

const port = 3000;

export const app = express();
app.use(json());

export function startServer() {
    main()

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}