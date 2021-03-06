//express is the framework we're going to use to handle requests
const express = require('express')

var router = express.Router()

//We use this create the SHA256 hash
const crypto = require("crypto")

const bodyParser = require("body-parser")
//This allows parsing of the body of POST requests, that are encoded in JSON
router.use(bodyParser.json())
let getHash = require('../utilities/utils').getHash 
let sendEmail = require('../utilities/utils').sendEmailReset
let pool = require('../utilities/utils').pool
let jwt = require('jsonwebtoken');
let config = {
    secret: process.env.JSON_WEB_TOKEN
};


/**
 * @api {get} /reset/:token? Request to reset the password of the user
 * @apiName GetVerify
 * @apiGroup Verify
 * 
 * @apiParam {String} token The email of the account to be reset
 * 
 * @apiSuccess {boolean} success true when the name is verified
 * 
 * @apiError (404: Name Not Found) {String} message "Name not found"
 * @apiError (400: SQL Error) {String} message the reported SQL error details
 * 
 * 
 */ 
router.get("/:token?",(req, res, next) => {
    let token = req.params.token
    if (token) {
      if (token.startsWith('Bearer ')) {
          // Remove Bearer from string
          token = token.slice(7, token.length);
      }
  
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(403).json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  }, (request, response, next) => {
    const theQuery = "SELECT salt from Members WHERE email=$1"
    let values = [request.decoded.email]

    pool.query(theQuery, values)
        .then(result => {
            if (result.rowCount > 0) {
                request.salt = result.rows[0].salt
                next()
            } else {
                console.log("Name not found")
                response.status(404).send({
                    message: "Name not found"
                })
            }
        })
        .catch(err => {
            //log the error
            console.log(err.stack)
            console.log(values)
            console.log(theQuery)
            response.status(400).send({
                message: err.stack
            })
        })
}, (request, response) => {
    let randomPass = crypto.randomBytes(8).toString("hex")
    let newPass = getHash(randomPass, request.salt)
    const theQuery = "UPDATE members set password=$1 where email=$2"
    let values = [newPass, request.decoded.email]

    pool.query(theQuery, values)
        .then(result => {
            if (result.rowCount > 0) {
                console.log("Worked" + result)
                sendEmail("me", request.decoded.email, "Your Password has been reset", randomPass)
                response.send('<h' + 5 + ' style="color:black">Your password has been reset! Please check your email for confirmation!</h' + 5 + '>'); 
            } else {
                response.status(404).send({
                    message: "Name not found"
                })
            }
        })
        .catch(err => {
            //log the error
            // console.log(err.details)
            response.status(400).send({
                message: err.detail
            })
        })
})


module.exports = router