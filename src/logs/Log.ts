import {datetime} from '../datetime/DateTime';
import * as logger from 'winston';

logger.configure({
  level: 'info',
  transports: [
    new logger.transports.Console({
      colorize: true,
      timestamp: (): any => {
        return datetime.currentTimestamp();
      },
      formatter: (options: any): any => {
        // Return string will be passed to logger.
        return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' +
          (options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
      },
    } as any),
  ],
});

export default logger;
