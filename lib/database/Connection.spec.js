"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hxg on 9/10/17.
 * converted to TS by kis on 3/7/18
 */
const dotenv = require("dotenv");
dotenv.config();
const logging_1 = require("../logs/logging");
const log = logging_1.createLog(__filename);
const Connection_1 = require("./Connection");
describe.skip('Connection', () => {
    const chai = require('chai');
    const expect = chai.expect;
    it('should connect ', (done) => {
        const db = Connection_1.default.getDb();
        db.any('select * from current_date', []).then((data) => {
            log.info('data: %j', data);
            expect(data).to.be.ok;
            done();
        })
            .catch((error) => {
            log.error('catch: %j', error);
            done(error);
        });
    });
});
//# sourceMappingURL=Connection.spec.js.map