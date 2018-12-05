const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client-controller');
const appConfig = require('../config/app-config');
const auth = require('./../middlewares/auth');

module.exports.setRouter = function(app){
  const baseUrl = appConfig.apiVersion+'/clients';

  app.get(baseUrl+'/all',auth.isAuthenticated, clientController.getAllClient);
  // http://localhost:9000/api/v1/clients/all?authToken=Admin
  // To generate api documentation >apidoc -i routes/ -o apidoc/

	/**
	 * @api {get} /api/v1/clients/all Get all clients
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Client Details Found",
	    "status": 200,
	    "data": [
					{
						clientId: "string",
						firstName: "string",
						lastName: "string",
						email: "string",
						phone: number,
						balance: boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Client Details",
	    "status": 500,
	    "data": null
	   }
	 */
}
