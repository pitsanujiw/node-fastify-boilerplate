import { injectable } from 'inversify';
import { ConfigurationManager } from '../../configs';
import { container, types } from '../../containers';
import { Server } from '../../Server';
import { HttpServers } from '../httpservers';

export interface IBootstrapper {
    initialize(): Promise<void>;
}

@injectable()
export class Bootstrapper implements IBootstrapper {
    public async initialize(): Promise<void> {
        this.bindDependencies();

        return Promise.resolve();
    }

    private bindDependencies(): void {
        container.bind<Server>(types.Server).to(Server).inSingletonScope();
        container.bind<ConfigurationManager>(types.ConfigurationManager).to(ConfigurationManager).inSingletonScope();
        container.bind<HttpServers>(types.HttpServers).to(HttpServers).inSingletonScope();
    }
}
