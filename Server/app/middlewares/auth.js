
/* Const Library */
const logger = require('../libs/logger-lib');
const response = require('../libs/response-lib');
const check = require('../libs/check-lib');

const isAuthenticated = (req, res, next) => {
  if (req.params.authToken || req.query.authToken || req.header('authToken')) {
    if(req.params.authToken=="Admin" || req.query.authToken=="Admin" || req.header('authToken')=="Admin"){
      req.user = {fullName:'Admin',userId:'Admin'};
      next();
    }
    else{
      logger.error('Incorrect authentication token', 'Authentication Middleware', 5);
      const apiResponse = response.generate(true, 'Incorrect authentication token', 403, null);
      res.send(apiResponse);
    }
  } else {
    logger.error('Authentication Token Missing', 'Authentication Middleware', 5);
    const apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null);
    res.send(apiResponse);
  }
}



module.exports = {
  isAuthenticated: isAuthenticated
};