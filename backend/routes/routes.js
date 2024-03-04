import { customerRouter } from "./customerRouter.js";
import { userRouter } from "./userRouter.js";

export function createRouter(app) {
    app.use('/users', userRouter)
    app.use('/customer', customerRouter)
}
