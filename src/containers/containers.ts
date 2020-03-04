import { Container } from 'inversify';
import 'reflect-metadata';
import { Bootstrapper, IBootstrapper } from '../core';
import { types } from './types';

const container = new Container({ skipBaseClassChecks: true });
container.bind<IBootstrapper>(types.Bootstrapper).to(Bootstrapper).inSingletonScope();

export default container;
