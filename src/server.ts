import * as fastify from 'fastify';
import { injectable } from 'inversify';
import { ConfigurationManager } from './configs';
import { container, types } from './containers';
import { HttpServers } from './core';
import { IServer } from './interfaces';

@injectable()
export class Server implements IServer {
    private _servers: fastify.FastifyInstance;
    private _config: ConfigurationManager;
    constructor() {
        this._servers = container.get<HttpServers>(types.HttpServers).servers;
        this._config = container.get<ConfigurationManager>(types.ConfigurationManager);
    }

    public async start(): Promise<void> {
        const ports = this._config.getValue('port');
        this._servers.get('/', (req, res) => {
            res.send(req.headers);
        });
        try {
            await this._servers.listen(ports);
        } catch (error) {
            process.exit(1);
        }
    }
}
