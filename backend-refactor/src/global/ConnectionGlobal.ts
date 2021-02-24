import {Client} from 'pg';

class ConnectionGlobal {
    public clientMap: Map<string, Client>;

    constructor() {
        this.clientMap = new Map<string, Client>();
    }

    async delete(key: string) {
        if (this.clientMap.has(key)) {
            const client: Client | undefined = this.clientMap.get(key);
            if (client !== undefined) {
                await client.end();
            }
        }
    }

    async set(key: string, client: Client) {
        await this.delete(key);
        this.clientMap.set(key, client);
    }

    get(key: string): Client | undefined {
        return this.clientMap.get(key);
    }

    has(key: string): boolean {
        return this.clientMap.has(key);
    }
}

const connectionGlobal = new ConnectionGlobal();
export default connectionGlobal;
