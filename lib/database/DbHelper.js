"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kis on 3/7/18.
 */
const ramda_1 = require("ramda");
const { equals } = ramda_1.default;
const Connection_1 = require("./Connection");
const Log_1 = require("../logs/Log");
const camelCase_1 = require("../camelCase");
const ERROR_404 = '404';
class DbHelper {
    findMany(query, params, transformer) {
        Log_1.default.debug('DbHelper.findMany query: %s, params: %j', query, params);
        const db = Connection_1.default.getDb();
        return db.any(query, params).then((rows) => {
            return transformer(rows);
        })
            .catch((error) => {
            Log_1.default.error('DbHelper.findMany ERROR: %j', error);
            return Promise.reject({ statusCode: 500, error: 'There is a database error' });
        });
    }
    findOne(query, params) {
        Log_1.default.debug('DbHelper.findOne query: %s, params: %j', query, params);
        return Connection_1.default.getDb().any(query, params).then((rows) => {
            const first = rows[0];
            Log_1.default.debug('DbHelper.findOne first: %s', first);
            if (ramda_1.default.isNil(first)) {
                throw new Error(ERROR_404);
            }
            return rows[0];
        })
            .catch((error) => {
            if (equals('Error: 404', error.toString())) {
                return Promise.reject({ statusCode: 404, error: 'No record found' });
            }
            Log_1.default.error('DbHelper.findOne error: %j, error: %s, is: %s, typeof: %s', error, error);
            return Promise.reject({ statusCode: 500, error: `Something went wrong: ${error.toString()}` });
        });
    }
    transform(rows) {
        Log_1.default.debug('DbHelper.transform rows: %s', rows.length);
        return rows.map((row) => {
            return camelCase_1.camelCase(row).details;
        });
    }
}
exports.DbHelper = DbHelper;
exports.default = new DbHelper();
//# sourceMappingURL=DbHelper.js.map