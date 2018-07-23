"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hxg on 9/10/17.
 * converted to TS by kis on 3/7/18
 */
const dotenv = require("dotenv");
dotenv.config();
const Log_1 = require("../logs/Log");
const Connection_1 = require("./Connection");
describe('Connection', () => {
    const chai = require('chai');
    const expect = chai.expect;
    it('should connect ', (done) => {
        const db = Connection_1.default.getDb();
        db.any('select * from current_date', []).then((data) => {
            Log_1.default.info('data: %j', data);
            expect(data).to.be.ok;
            done();
        })
            .catch((error) => {
            Log_1.default.error('catch: %j', error);
            done(error);
        });
    });
});
//# sourceMappingURL=Connection.spec.js.map