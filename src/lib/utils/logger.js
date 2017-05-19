import winston from 'winston';

const options = {
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: true,
  colorize: true,
  humanReadableUnhandledException: true,
}

// check https://github.com/winstonjs/winston/blob/master/docs/transports.md
// for more transport options.
const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)(options),
  ]
});

export default logger;
