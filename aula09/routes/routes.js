import { productRouter } from "./productRouter.js";

export function createRouter(app){
    app.use('/products', productRouter)
}
