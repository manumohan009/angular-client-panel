const mongoose = require('mongoose');
// const shortid = require('shortid');
// const time = require('./../libs/timeLib');
// const response = require('./../libs/responseLib');
const logger = require('./../libs/logger-lib');
// const check = require('./../libs/checkLib');

const ClientModel = mongoose.model('Client');

/**
 * function to read all Clients.
 */
const getAllClient = (req, res) => {
  ClientModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err, result) => {
      if(err) {
        console.log(err)
        logger.error(err.message, 'Blog Controller', 10);
        // const apiResponse = response.generate(true, 'Failed to find client details', 500, null);
        res.send('Failed to find client details');
      // } else if (check.isEmpty(result)) {
      //   logger.info('No Client Found', 'Client Controller: getAllClient');
      //   // const apiResponse = response.generate(true, 'No Client Found', 404, null);
      //   res.send('No Client Found');
      }
       else {
        const apiResponse = response.generate(false, 'All Client Details Found', 200, result);
        res.send(result);
      }
    });
}

module.exports = {
  getAllClient: getAllClient
}
