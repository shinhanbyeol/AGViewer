import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from "koa-static";
import mount from 'koa-mount';
import path from "path";
import session from './middleware/session';
import routes from './routes'

import {v4 as uuidv4} from 'uuid';

const app = new Koa();
app.keys = [uuidv4()];
session(app);
app.use(bodyParser());
app.use(mount('/', serve(path.join(__dirname, `../../frontend/build`))));

routes(app);

let port = 3000;
if (process.env.PORT) {
    port = parseInt(process.env.PORT);
}

app.listen(port, () => {
    console.log(`Koa server is listening on port ${port}`);
});
