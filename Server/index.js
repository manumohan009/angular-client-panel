const express = require('express');
const http = require('http');
const appConfig = require('./config/app-config');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const globalErrorMiddleware = require('./middlewares/appErrorHandler');
// const routeLoggerMiddleware = require('./middlewares/routeLogger');
// const helmet = require('helmet');
const logger = require('./libs/logger-lib');

//declaring an instance or creating an application instance
const app = express();

//middlewares

//middlewares


// Bootstrap models
const modelsPath = './models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if(~file.indexOf('.js')) {
    console.log(file);
    require(modelsPath + '/' + file);
  }
});
// Bootstrap models


// Bootstrap route
const routesPath = './routes';
fs.readdirSync(routesPath).forEach(function (file) {
  if(~file.indexOf('.js')) {
    console.log('including the following file');
    console.log(routesPath + '/' + file);
    const route = require(routesPath + '/' + file);
    route.setRouter(app);
  }
});
// Bootstrap route


// calling global 404 handler after route

// end global 404 handler

const server = http.createServer(app);
console.log(appConfig);
server.listen(appConfig.port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

 function onError(error) {
   if(error.syscall !== 'listen') {
     logger.error(error.code + 'not equal listen', 'serverOnErrorHandler', 10);
     throw error;
   }

   // handle specific listen errors with friendly messages
   switch(error.code) {
      case 'EACCES':
        logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10);
        process.exit(1);
        break;

      case 'EADDRINUSE':
        logger.error(error.code + ':port is already in use', 'serverOnErrorHandler', 10);
        process.exit(1);
        break;

      default:
        logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10);
        throw error;
   }
 }

 /**
 * Event listener for HTTP server "listening" event.
 */

 function onListening() {
   const addr = server.address();
  //  const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
  //  ('Listening on' + bind)
   logger.info('server listening on port ' + addr.port, 'serverOnListeningHandler', 10);
   const db = mongoose.connect(appConfig.db.uri, {useCreateIndex: true, useNewUrlParser: true})
 }

 // handling mongoose connection error
 mongoose.connection.on('error', function(err) {
   console.log('database connection error');
   console.log(err);
 });

// handling mongoose success event
mongoose.connection.on('open', function(err) {
  if(err) {
    console.log('database error');
    console.log(err);
  } else {
    console.log('database connection open success');
  }
}); // end mongoose connection open handler


