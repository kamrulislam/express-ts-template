"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hxg on 9/10/17.
 */
const traverse_1 = require("traverse");
const Log_1 = require("./logs/Log");
class AppEnv {
    flattern(instance, envKey) {
        const flat = {};
        const leaves = traverse_1.default(instance).reduce(function (acc, x) {
            const self = this;
            if (self.isLeaf) {
                if (x === undefined) {
                    console.error('self.key: %s has no value specified: %s', self.key, x);
                    throw new Error(`Specify the value of ${self.key} for ${envKey}`);
                }
                flat[self.key] = x;
            }
            return acc;
        }, []);
        return flat;
    }
    init(targetEnv) {
        // process.env.FEN_CACHE_API_REQUEST_TIMEOUT = '10000';
        // log.info('initEnv targetEnv: %s, process.env.FEN_CACHE_API_REQUEST_TIMEOUT: %s',
        // targetEnv, process.env.FEN_CACHE_API_REQUEST_TIMEOUT);
        if (!targetEnv) {
            Log_1.default.info('initEnv targetEnv is empty using .env');
            return;
        }
        const envs = require('../envs.json');
        Log_1.default.info('initEnv available env keys: %j', Object.keys(envs), envs[targetEnv]);
        const envToFlattern = envs[targetEnv];
        if (!envToFlattern) {
            Log_1.default.info('initEnv envs[targetEnv] is empty using .env');
            return;
        }
        const flats = this.flattern(envToFlattern, targetEnv);
        Object.keys(flats).forEach((key) => {
            // log.info('initEnv key: %s, env[key]: %j', key, env[key]);
            process.env[key] = flats[key];
            Log_1.default.info('initEnv key: %s, value: %s', key, process.env[key]);
        });
    }
}
const env = new AppEnv();
exports.default = env;
//# sourceMappingURL=app-env.js.map