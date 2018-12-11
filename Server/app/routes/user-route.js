const express = require('express');
const user = express.Router();
const userController = require("./../../app/controllers/user-controller");
const auth = require('./../middlewares/auth');

// route middleware that will happen on every request
user.use(function(req, res, next) {
  // log each request to the console
// console.log(req.method, req.url);
  // continue doing what we were doing and go to the route
  next();
});


user.get('/view/all', auth.isAuthorized, userController.getAllUser);

/**
 * @api {get} /api/v1/users/view/all  View all users
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
  "error": false,
  "message": "All User Details Found",
  "status": 200,
  "data":[
          {
            "userId": "oU8F4iah8",
            "firstName": "Manu",
            "lastName": "Mohan",
            "email": "manumohan.cvav@gmail.com",
            "mobileNumber": 9400936990
      }
    ]
  }
@apiErrorExample {json} Error-Response:
*
* {
  "error": true,
  "message": "Failed To Find User Details",
  "status": 500,
  "data": null
  }
*/


// params: userId.
user.get('/:userId/details', auth.isAuthorized, userController.getSingleUser);

/**
 * @api {get} /api/v1/users/:userId/details  View single user details
 *
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} userId userId of the client passed as the URL parameter
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
  "error": false,
  "message": "User Details Found",
  "status": 200,
  "data":
        {
            "userId": "oU8F4iah8",
            "firstName": "Manu",
            "lastName": "Mohan",
            "email": "manumohan.cvav@gmail.com",
            "mobileNumber": 9400936990,
            "createdOn": "2018-12-08T16:12:10.000Z"
        }
  }

@apiErrorExample {json} Error-Response:
*
* {
  "error": true,
  "message": "Failed To Find User Details",
  "status": 500,
  "data": null
  }
*/

// params: firstName, lastName, email, mobileNumber, password, apiKey.
user.post('/signup', userController.signUpFunction);


/**
 * @apiGroup users
 * @apiVersion  1.0.0
 * @api {post} /api/v1/users/login api for user signup.
 *
 * @apiParam {string} firstName firstName of the user. (body params) (required)
 * @apiParam {string} lastName lastName of the user. (body params) (required)
 * @apiParam {string} email email of the user. (body params) (required)
 * @apiParam {string} password password of the user. (body params) (required)
 * @apiParam {string} mobileNumber mobileNumber of the user. (body params) (required)
 *
 * @apiSuccess {object} myResponse shows error status, message, http status code, result.
 *
 * @apiSuccessExample {object} Success-Response:
    {
        "error": false,
        "message": "User created",
        "status": 200,
        "data": {
            "userId": "H3Sf1R3Mx",
            "firstName": "Pooja",
            "lastName": "PR",
            "email": "pooja@gmail.com",
            "mobileNumber": 9400936990,
            "createdOn": "2018-12-08T16:12:10.000Z",
            "_id": "5c0bed5ad6fc803c9891fba1",
            "__v": 0
        }
    }
*/

user.post('/login', userController.loginFunction);


/**
 * @apiGroup users
 * @apiVersion  1.0.0
 * @api {post} /api/v1/users/login api for user login.
 *
 * @apiParam {string} email email of the user. (body params) (required)
 * @apiParam {string} password password of the user. (body params) (required)
 *
 * @apiSuccess {object} myResponse shows error status, message, http status code, result.
 *
 * @apiSuccessExample {object} Success-Response:
     {
        "error": false,
        "message": "Login Successful",
        "status": 200,
        "data": {
            "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
            "userDetails": {
            "mobileNumber": 2234435524,
            "email": "someone@mail.com",
            "lastName": "Sengar",
            "firstName": "Rishabh",
            "userId": "-E9zxTYA8"
        }

    }
*/

user.put('/:userId/edit', auth.isAuthorized, userController.editUser);

user.post('/:userId/delete', auth.isAuthorized, userController.deleteUser);

user.post('/logout', auth.isAuthorized, userController.logout);

module.exports = user;

// --------------------------------------------------------------------------------

// route middleware that will happen on every request
// router.use(function(req, res, next) {
//     // log each request to the console
//     console.log(req.method, req.url);
//     // continue doing what we were doing and go to the route
//     next();
// });
// --------------------------------------------------------------------------------
// route middleware to validate :name
// router.param('name', function(req, res, next, name) {
//     // do validation on name here
//     // blah blah validation
//     // log something so we know its working
//     console.log('doing name validations on ' + name);

//     // once validation is done save the new item in the req
//     req.name = name;
//     // go to the next thing
//     next();
// });

// --------------------------------------------------------------------------------
