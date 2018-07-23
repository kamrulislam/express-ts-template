import * as winston from 'winston';
import {Logger} from "winston";
const { createLogger, format, transports } = winston;
const { combine, timestamp, label, prettyPrint, printf, splat, simple } = format;
import * as R from 'ramda';
const { contains } = R;
import * as moment from 'moment-timezone';
import {timezone} from "../datetime/DateTime";

const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

// const appendTimestamp = format((info, opts) => {
//   if(opts.tz)
//     info.timestamp = moment().tz(opts.tz).format();
//   return info;
// });

// const logger = createLogger({
//   level: 'info',
//   format:
//     combine(
//       label({ label: 'default' }),
//       timestamp(),
//       splat(),
//       myFormat
//     ),
//   transports: [
//     new winston.transports.Console()
//     // - Write to all logs with level `info` and below to `combined.log`
//     // - Write all logs error (and below) to `error.log`.
//     //new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     //new winston.transports.File({ filename: 'combined.log' })
//   ]
// });

export const createLog = (logLabel: string): Logger => {
  const label1 = contains('/', logLabel)?logLabel.split(/[\\/]/).pop() : logLabel;
  //appendTimestamp({ tz: timezone }),

  return createLogger({
    level: 'info',
    format:
      combine(
        label({ label: label1 }),
        timestamp(),
        splat(),
        myFormat
      )
    ,
    transports: [
      new winston.transports.Console()
    ]
  });
}

//export default logger;
