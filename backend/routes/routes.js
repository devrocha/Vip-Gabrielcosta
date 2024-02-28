import { userRouter } from "./userRouter.js";

export function createRouter(app){
    app.use('/users', userRouter)
}
