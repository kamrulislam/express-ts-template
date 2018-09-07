"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hxg on 9/10/17.
 */
const traverse = require("traverse");
const logging_1 = require("./logs/logging");
const log = logging_1.createLog(__filename);
class AppEnv {
    flattern(instance, envKey) {
        const flat = {};
        const leaves = traverse(instance).reduce(function (acc, x) {
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
        if (!targetEnv) {
            log.info('initEnv targetEnv is empty using .env');
            return;
        }
        const envs = require('../envs.json');
        log.info('initEnv available env keys: %j', Object.keys(envs), envs[targetEnv]);
        const envToFlattern = envs[targetEnv];
        if (!envToFlattern) {
            log.info('initEnv envs[targetEnv] is empty using .env');
            return;
        }
        const flats = this.flattern(envToFlattern, targetEnv);
        Object.keys(flats).forEach((key) => {
            // log.info('initEnv key: %s, env[key]: %j', key, env[key]);
            process.env[key] = flats[key];
            log.info('initEnv key: %s, value: %s', key, process.env[key]);
        });
    }
}
const env = new AppEnv();
exports.default = env;
//# sourceMappingURL=app-env.js.map