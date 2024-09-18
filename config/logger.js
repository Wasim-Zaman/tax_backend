const morgan = require("morgan");
const { createLogger, format, transports } = require("winston");

// Morgan logger setup for HTTP request logging (console only)
const httpLogger = {
  // Remove file logger, keep only console logger
  consoleLogger: morgan("dev"), // 'dev' format for concise colored output
};

// Winston logger setup for application logging (console only)
const appLogger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(), // Add color to the output
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // Logs to console with colorized output
    // Remove file transport
  ],
});

// Export loggers
module.exports = {
  httpLogger,
  appLogger,
};
