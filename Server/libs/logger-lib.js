const logger = require('pino')();
const moment = require('moment');

const captureError = (errorMessage, errorOrigin, errorLevel) => {
  const currentTime = moment();

  const errorResponse = {
    timestamp: currentTime,
    errorMessage: errorMessage,
    errorOrigin: errorOrigin,
    errorLevel: errorLevel
  }

  logger.error(errorResponse);
  return errorResponse;
} // end captureError

const captureInfo = (message, origin, importance) => {
  const currentTime = moment();

  const infoMessage = {
    timestamp: currentTime,
    message: message,
    origin: origin,
    level: importance
  };

  logger.info(infoMessage);
  return infoMessage;
} // end infoCapture

module.exports = {
  error: captureError,
  info: captureInfo
}
