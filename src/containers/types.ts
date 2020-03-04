export interface Types {
    Server: symbol;
    Bootstrapper: symbol;
    ConfigurationManager: symbol;
    HttpServers: symbol;
}

export const types: Types = {
    Server: Symbol.for('Server'),
    Bootstrapper: Symbol.for('Boostrapper'),
    ConfigurationManager: Symbol.for('ConfigurationManager'),
    HttpServers: Symbol.for('HttpServers'),
};
