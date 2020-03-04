import { injectable } from 'inversify';
import { ConfigurationManager } from '../../configs';
import { container, types } from '../../containers';
import { HttpServers } from '../../core';
const app = container.get<HttpServers>(types.HttpServers).servers;

app.get('heathcheck', (request, response) => {
    response.code(200).send(request.log);
});
