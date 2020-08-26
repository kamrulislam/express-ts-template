"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbHelper = void 0;
/**
 * Created by kis on 3/7/18.
 */
const ramda_functions_1 = require("../ramda-functions");
const Connection_1 = require("./Connection");
const camelCase_1 = require("../camelCase");
const logging_1 = require("../logs/logging");
const log = logging_1.createLog(__filename);
const ERROR_404 = '404';
class DbHelper {
    findMany(query, params, transformer) {
        log.debug('DbHelper.findMany query: %s, params: %j', query, params);
        const db = Connection_1.default.getDb();
        return db.any(query, params).then((rows) => {
            return ramda_functions_1.isNil(transformer) ? rows : transformer(rows);
        })
            .catch((error) => {
            log.error('DbHelper.findMany ERROR: %j', error);
            return Promise.reject({ statusCode: 500, error: 'There is a database error' });
        });
    }
    findOne(query, params) {
        log.debug('DbHelper.findOne query: %s, params: %j', query, params);
        return Connection_1.default.getDb().any(query, params).then((rows) => {
            const first = rows[0];
            log.debug('DbHelper.findOne first: %s', first);
            if (ramda_functions_1.isNil(first)) {
                throw new Error(ERROR_404);
            }
            return rows[0];
        })
            .catch((error) => {
            if (ramda_functions_1.equals('Error: 404', error.toString())) {
                return Promise.reject({ statusCode: 404, error: 'No record found' });
            }
            log.error('DbHelper.findOne error: %j, error: %s, is: %s, typeof: %s', error, error);
            return Promise.reject({ statusCode: 500, error: `Something went wrong: ${error.toString()}` });
        });
    }
    transform(rows) {
        log.debug('DbHelper.transform rows: %s', rows.length);
        return rows.map((row) => {
            return camelCase_1.camelCase(row).details;
        });
    }
}
exports.DbHelper = DbHelper;
exports.default = new DbHelper();
//# sourceMappingURL=DbHelper.js.map