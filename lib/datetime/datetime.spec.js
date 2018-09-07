"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const DateTime_1 = require("../datetime/DateTime");
const logging_1 = require("../logs/logging");
const log = logging_1.createLog(__filename);
describe('datetime', () => {
    it('creates a currentTimestamp', (done) => {
        console.log(DateTime_1.datetime.currentTimestamp());
        const chai = require('chai');
        const expect = chai.expect;
        expect(typeof DateTime_1.datetime.currentTimestamp()).to.equal('string');
        expect(DateTime_1.datetime.currentTimestamp().length).to.equal(19);
        done();
    });
    it('creates a moment format', (done) => {
        console.log(DateTime_1.datetime.moment().format());
        const chai = require('chai');
        const expect = chai.expect;
        expect(typeof DateTime_1.datetime.moment().format()).to.equal('string');
        expect(DateTime_1.datetime.moment().format().length).to.equal(25);
        done();
    });
    it('creates a momentTz format', (done) => {
        console.log(DateTime_1.datetime.momentTz().format());
        const chai = require('chai');
        const expect = chai.expect;
        expect(typeof DateTime_1.datetime.momentTz().format()).to.equal('string');
        expect(DateTime_1.datetime.momentTz().format().length).to.equal(25);
        done();
    });
});
//# sourceMappingURL=datetime.spec.js.map