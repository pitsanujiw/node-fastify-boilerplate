import { injectable } from 'inversify';
import * as config from '../../constants/configs.json';

export interface IConfigurationManager {
    getValue(key: string): any;
}

// type valueItem = string | number | [] | object | null | undefined;

@injectable()
export class ConfigurationManager implements IConfigurationManager {
    private _dict: { [key: string]: any } = {};

    constructor() {
        this.loadSettings();
    }

    public getValue(key: string): any {
        return this._dict[key];
    }

    private loadSettings(): void {
        for (const prop in config) {
            this._dict[prop] = (config as any)[prop];
        }
    }
}
