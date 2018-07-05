import {datetime} from '../datetime/DateTime';
import * as winston from 'winston';
import {Logger} from "winston";
const { createLogger, format, transports } = winston;
const { combine, timestamp, label, prettyPrint, printf, splat, simple } = format;

const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const logger = createLogger({
  level: 'info',
  format:
    combine(
      label({ label: 'default' }),
      timestamp(),
      splat(),
      myFormat
    ),
  transports: [
    new winston.transports.Console()
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //new winston.transports.File({ filename: 'combined.log' })
  ]
});

export const createLog = (logLabel: string): Logger => {
  return createLogger({
    level: 'info',
    format:
      combine(
        label({ label: logLabel }),
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

export default logger;
