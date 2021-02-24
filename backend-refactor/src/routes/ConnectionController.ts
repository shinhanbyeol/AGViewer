import Router from "koa-router";
import Koa from "koa";
import {ConnectionOptions} from "../models/session";
import {FLAVORS} from "../models/flavors";

function tryConnect(opts: ConnectionOptions): boolean {
    if(opts.)
}

const router = new Router();
router.prefix('/api/v1/db');
router.get("/", async function (ctx: Koa.Context) {
    ctx.status = 500;
    ctx.body = {}
});
router.post("/connect", async function (ctx: Koa.Context) {
    const connReq = <ConnectionOptions>ctx.request.body;

    if (ctx.session) {
        ctx.body = {
            'status': 0
        }
    }
});

export default router;
