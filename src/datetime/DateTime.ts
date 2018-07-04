"use strict";
const moment = require('moment-timezone');
const timezone = 'Australia/Sydney';
const datetimeformat = 'YYYY-MM-DD HH:mm:ss';
const datetimeformatkebab = 'YYYY-MM-DD-HH-mm-ss';
const datetimeformatiso = 'YYYY-MM-DDTHH:mm:ss';

class Datetime {
  momentTz() {
    return moment().tz(timezone);
  }

  moment() {
    return moment();
  }

  currentTimestampKebab() {
    return moment().tz(timezone).format(datetimeformatkebab)
  }

  currentTimestamp() {
    return moment().tz(timezone).format(datetimeformat)
  }

  currentTimestampIso() {
    return moment().tz(timezone).format(datetimeformatiso)
  }

  dateParamtoISOString(dateParam: Date) {
    return moment(dateParam).tz(timezone).format(datetimeformatiso);
  }

  formatDateWithFormat(dateToFormat:any, format:any) {
    if (dateToFormat) {
      return moment(dateToFormat).format(format)
    }
    return null
  }

  formatDateTZ(dateToFormat:any) {
    if (dateToFormat) {
      return moment(dateToFormat).tz(timezone).format("DD/MM/YYYY")
    }
    return null
  }

  durationFromCurrentInMinutes = (toCheck: any): number => {
    const duration = moment.duration(moment().tz(timezone).diff(toCheck));
    return duration.asMinutes();
  }
}

export const datetime = new Datetime();

