// import * as cluster from 'cluster';
// import * as os from 'os';
import 'reflect-metadata';
import { container, types } from './containers';
import { IBootstrapper } from './core';
import { Server } from './Server';

const bootstrapper = container.get<IBootstrapper>(types.Bootstrapper);
// const cpus = os.cpus();
// if (cluster.isMaster) {
//     cpus.forEach((): void => {
//         cluster.fork();
//     });

//     cluster.on('exit', (worker, code, signal): void => {
//         console.log(`worker ${worker.process.pid} died`);
//     });
// } else {
// }
bootstrapper.initialize()
    .then(async () => {
        const server = container.get<Server>(types.Server);
        try {
            await server.start();
        } catch (error) {
            console.error(error);
        }
    });
