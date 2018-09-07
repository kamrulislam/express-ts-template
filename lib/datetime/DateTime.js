"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const moment = require('moment-timezone');
const moment = require("moment-timezone");
const ramda_functions_1 = require("../ramda-functions");
exports.timezone = ramda_functions_1.isNil(process.env.TIME_ZONE) ?
    'Australia/Melbourne' : process.env.TIME_ZONE;
exports.datetimeformat = 'YYYY-MM-DD HH:mm:ss';
const datetimeformatkebab = 'YYYY-MM-DD-HH-mm-ss';
const datetimeformatiso = 'YYYY-MM-DDTHH:mm:ss';
exports.toDbDate = (val) => {
    return ramda_functions_1.isNil(val) ? null : val;
};
class Datetime {
    constructor() {
        this.durationFromCurrentInMinutes = (toCheck) => {
            const duration = moment.duration(moment().tz(exports.timezone).diff(toCheck));
            return duration.asMinutes();
        };
    }
    momentTz() {
        return moment().tz(exports.timezone);
    }
    moment() {
        return moment();
    }
    currentTimestampKebab() {
        return moment().tz(exports.timezone).format(datetimeformatkebab);
    }
    currentTimestamp() {
        return moment().tz(exports.timezone).format(exports.datetimeformat);
    }
    currentTimestampIso() {
        return moment().tz(exports.timezone).format(datetimeformatiso);
    }
    dateParamtoISOString(dateParam) {
        return moment(dateParam).tz(exports.timezone).format(datetimeformatiso);
    }
    formatDateWithFormat(dateToFormat, format) {
        if (dateToFormat) {
            return moment(dateToFormat).format(format);
        }
        return null;
    }
    formatDateTZWithFormat(dateToFormat, format) {
        if (dateToFormat) {
            return moment(dateToFormat).tz(exports.timezone).format(format);
        }
        return null;
    }
    formatDateTZ(dateToFormat) {
        if (dateToFormat) {
            return moment(dateToFormat).tz(exports.timezone).format('DD/MM/YYYY');
        }
        return null;
    }
}
exports.datetime = new Datetime();
//# sourceMappingURL=DateTime.js.map