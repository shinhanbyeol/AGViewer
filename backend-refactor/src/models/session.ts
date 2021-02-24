import {FLAVORS} from "./flavors";

interface ConnectionOptions {
    database: string,
    graph: string,
    host: string,
    password: string,
    port: number,
    user: string,
    flavor: FLAVORS
}

export {ConnectionOptions}
