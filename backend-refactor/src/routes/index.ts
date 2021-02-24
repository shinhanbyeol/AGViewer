import connectionController from "./ConnectionController";
import Koa from "koa";

export default (app: Koa): void => {
    app.use(connectionController.routes()).use(connectionController.allowedMethods());
}
