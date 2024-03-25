import express, { json } from "express";
import { main } from "./startDb.js";
import cors from "cors";

const port = 3000;

export const app = express();
app.use(json());
app.use(cors());

export function startServer() {
    main()

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}