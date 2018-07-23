"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const moment = require('moment-timezone');
const moment = require("moment-timezone");
const timezone = 'Australia/Sydney';
const datetimeformat = 'YYYY-MM-DD HH:mm:ss';
const datetimeformatkebab = 'YYYY-MM-DD-HH-mm-ss';
const datetimeformatiso = 'YYYY-MM-DDTHH:mm:ss';
class Datetime {
    constructor() {
        this.durationFromCurrentInMinutes = (toCheck) => {
            const duration = moment.duration(moment().tz(timezone).diff(toCheck));
            return duration.asMinutes();
        };
    }
    momentTz() {
        return moment().tz(timezone);
    }
    moment() {
        return moment();
    }
    currentTimestampKebab() {
        return moment().tz(timezone).format(datetimeformatkebab);
    }
    currentTimestamp() {
        return moment().tz(timezone).format(datetimeformat);
    }
    currentTimestampIso() {
        return moment().tz(timezone).format(datetimeformatiso);
    }
    dateParamtoISOString(dateParam) {
        return moment(dateParam).tz(timezone).format(datetimeformatiso);
    }
    formatDateWithFormat(dateToFormat, format) {
        if (dateToFormat) {
            return moment(dateToFormat).format(format);
        }
        return null;
    }
    formatDateTZ(dateToFormat) {
        if (dateToFormat) {
            return moment(dateToFormat).tz(timezone).format('DD/MM/YYYY');
        }
        return null;
    }
}
exports.datetime = new Datetime();
//# sourceMappingURL=DateTime.js.map