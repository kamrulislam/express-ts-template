"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateTime_1 = require("../datetime/DateTime");
const logger = require("winston");
logger.configure({
    level: 'info',
    transports: [
        new logger.transports.Console({
            colorize: true,
            timestamp: () => {
                return DateTime_1.datetime.currentTimestamp();
            },
            formatter: (options) => {
                // Return string will be passed to logger.
                return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' +
                    (options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
            },
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=Log.js.map