const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/time-lib');
const response = require('../libs/response-lib');
const logger = require('../libs/logger-lib');
const check = require('../libs/check-lib');
/* Models */
const ClientModel = mongoose.model('Client');

/**
 * function to read all client
 */
const getAllClient = (req, res) => {
    ClientModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err);
                logger.error(err.message, 'Client Controller: getAllClient', 10);
                const apiResponse = response.generate(true, 'Failed To Find Client Details', 500, null);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info('No Client Found', 'Client Controller: getAllClient');
                const apiResponse = response.generate(true, 'No Client Found', 404, null);
                res.send(apiResponse);
            } else {
              const apiResponse = response.generate(false, 'All Client Details Found', 200, result);
                res.send(apiResponse);
            }
        });
}// end get all clients

module.exports = {
    getAllClient: getAllClient
}// end exports
