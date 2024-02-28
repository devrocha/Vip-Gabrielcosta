import express, { json } from "express";

const port = 3000;

export const app = express();
app.use(json());

export function startServer() {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}