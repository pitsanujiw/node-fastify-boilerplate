import * as fastify from 'fastify';
import { injectable } from 'inversify';

export interface IHttpServers {
    init(): Promise<void>;
}

@injectable()
export class HttpServers implements IHttpServers {
    public servers: fastify.FastifyInstance;
    constructor() {
        this.servers = fastify({ logger: true });
        this.servers.log.info('start...');
        this.init();
    }

    public async init(): Promise<void> {
        const json = require('body-parser/lib/types/json.js');
        const urlencoded = require('body-parser/lib/types/urlencoded.js');
        const cors = require('cors');
        this.servers.use(cors());
        this.servers.use(json());
        this.servers.use(urlencoded({
            extended: true,
        }));
        this.servers.log.info('init successfully');
    }

}
