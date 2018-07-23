"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hxg on 12/10/17.
 */
const _ = require("lodash");
const camelCase = (snakeCaseObject) => {
    return _.mapKeys(snakeCaseObject, (value, key) => _.camelCase(key.toString()));
};
exports.camelCase = camelCase;
//# sourceMappingURL=camelCase.js.map