import session from "koa-session";
import Koa from "koa";
import {v4 as uuidv4} from "uuid";

export default (app: Koa): void => {
    const sessionConfig = {}
    app.use(session(sessionConfig, app));
    app.use(async (ctx: Koa.Context, next: Koa.Next) => {
        if (ctx.session) {
            const currentKey = ctx.session.key;
            if (currentKey === null || currentKey === undefined) {
                ctx.session.key = uuidv4();
            }
        }
        await next();
    });
    app.on('session.ts:expired', (key, value, ctx) => {
        console.log(key)
    });
}
