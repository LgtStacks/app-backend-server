const API_KEY = process.env.OPEN_WEATHER_KEY
const API_KEY2 = process.env.WEATHER_BIT_KEY
const ZIP_CODE = 98402
const LAT = 47.2451
const LON = -122.4380
const COUNTRY_CODE = ",us"
const EXCLUDE = "current, minutely, daily"

//express is the framework we're going to use to handle requests
const express = require('express')

//request module is needed to make a request to a web service
const request = require('request')

var router = express.Router()

/**
 * @api {post} /weather/current Request current weather conditions from OpenWeatherMap.org
 * @apiName Weather API
 * @apiGroup OpenWeatherMap
 * 
 * @apiHeader {String} authorization JWT provided from Auth post
 * 
 * @apiDescription This end point is a pass through to the OpenWeatherMap API. 
 */ 
router.post("/current", (req, res) => {

    console.log(req.decoded)
    //let query = req.query.search;
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
    
    //find the query string (parameters) sent to this end point and pass them on to
    // openweathermap api call 
    let n = req.originalUrl.indexOf('?') + 1
    if(n > 0) {
        url += '&' + req.originalUrl.substring(n)
    }

    //When this web service gets a request, make a request to the OpenWeatherMap Web service
    request(url, function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            // pass on everything (try out each of these in Postman to see the difference)
            // res.send(response);
            
            // or just pass on the body

            var n = body.indexOf("{")
            var nakidBody = body.substring(n - 1)

            res.send(nakidBody)
        }
    })

})

/**
 * @api {get} /weather/latlon Request current weather conditions from OpenWeatherMap.org
 * @apiName Weather API
 * @apiGroup OpenWeatherMap
 * 
 * @apiHeader {String} authorization JWT provided from Auth post
 * 
 * @apiDescription This end point is a pass through to the OpenWeatherMap API. 
 */ 
router.get("/latlon", (req, res) => {

    console.log(req.decoded)
   
    let url = `api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
 
    //find the query string (parameters) sent to this end point and pass them on to
    // openweathermap api call 
    let n = req.originalUrl.indexOf('?') + 1
    if(n > 0) {
        url += '&' + req.originalUrl.substring(n)
    }

    //When this web service gets a request, make a request to the OpenWeatherMap Web service
    request(url, function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            // pass on everything (try out each of these in Postman to see the difference)
            // res.send(response);
            
            // or just pass on the body

            var n = body.indexOf("{")
            var nakidBody = body.substring(n - 1)

            res.send(nakidBody)
        }
    })

})


/**
 * @api {get} /weather/current Request current weather conditions from OpenWeatherMap.org
 * @apiName Weather API
 * @apiGroup OpenWeatherMap
 * 
 * @apiHeader {String} authorization JWT provided from Auth get
 * 
 * @apiDescription This end point is a pass through to the OpenWeatherMap API. 
 */ 
router.get("/current", (req, res) => {

    console.log(req.decoded)

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`
    
    //find the query string (parameters) sent to this end point and pass them on to
    // openweathermap api call 
    let n = req.originalUrl.indexOf('?') + 1
    if(n > 0) {
        url += '&' + req.originalUrl.substring(n)
    }

    //When this web service gets a request, make a request to the OpenWeatherMap Web service
    request(url, function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            // pass on everything (try out each of these in Postman to see the difference)
            // res.send(response);
            
            // or just pass on the body

            var n = body.indexOf("{")
            var nakidBody = body.substring(n - 1)

            res.send(nakidBody)
        }
    })

})



/**
 * @api {get} /weather/hourly Request hourly forecasted weather from Weatherbit.io
 * @apiName Weather API
 * @apiGroup Weatherbit
 * 
 * @apiHeader {String} authorization JWT provided from Auth get
 * 
 * @apiDescription This end point is a pass through to the Weatherbit API. 
 */ 
router.get("/hourly", (req, res) => {

    console.log(req.decoded)
    
    let url = `https://api.weatherbit.io/v2.0/forecast/hourly?key=${API_KEY2}`
    //let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&exclude=${EXCLUDE}&appid=${API_KEY}`
     
    let n = req.originalUrl.indexOf('?') + 1
    if(n > 0) {
        url += '&' + req.originalUrl.substring(n)
    }

    //When this web service gets a request, make a request to the OpenWeatherMap Web service
    request(url, function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            // pass on everything (try out each of these in Postman to see the difference)
            // res.send(response);
            
            // or just pass on the body

            var n = body.indexOf("{")
            var nakidBody = body.substring(n - 1)

            res.send(nakidBody)
        }
    })

})

/**
 * @api {get} /weather/daily Request daily forecasted weather from Weatherbit.io
 * @apiName Weather API
 * @apiGroup Weatherbit
 * 
 * @apiHeader {String} authorization JWT provided from Auth get
 * 
 * @apiDescription This end point is a pass through to the Weatherbit API. 
 */ 
router.get("/daily", (req, res) => {

    console.log(req.decoded)
    
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY2}`
 
    let n = req.originalUrl.indexOf('?') + 1
    if(n > 0) {
        url += '&' + req.originalUrl.substring(n)
    }

    //When this web service gets a request, make a request to the OpenWeatherMap Web service
    request(url, function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            // pass on everything (try out each of these in Postman to see the difference)
            // res.send(response);
            
            // or just pass on the body

            var n = body.indexOf("{")
            var nakidBody = body.substring(n - 1)

            res.send(nakidBody)
        }
    })

})

/**
 * @api {post} /weather/forecast Request forecasted weather from OpenWeatherMap.org
 * @apiName Weather API
 * @apiGroup OpenWeatherMap
 * 
 * @apiHeader {String} authorization JWT provided from Auth post
 * 
 * @apiDescription This end point is a pass through to the OpenWeatherMap API. 
 */ 
router.post("/forecast", (req, res) => {

    console.log(req.decoded)
    let query = req.query.search;
    let url = `https://api.openweathermap.org/data/2.5/forecast?zip=` + query + `${COUNTRY_CODE}&appid=${API_KEY}`
    
    //find the query string (parameters) sent to this end point and pass them on to
    // openweathermap api call 
    let n = req.originalUrl.indexOf('?') + 1
    if(n > 0) {
        url += '&' + req.originalUrl.substring(n)
    }

    //When this web service gets a request, make a request to the OpenWeatherMap Web service
    request(url, function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            // pass on everything (try out each of these in Postman to see the difference)
            // res.send(response);
            
            // or just pass on the body

            var n = body.indexOf("{")
            var nakidBody = body.substring(n - 1)

            res.send(nakidBody)
        }
    })

})

/**
 * @api {get} /weather/forecast Request forecasted weather from OpenWeatherMap.org
 * @apiName Weather API
 * @apiGroup OpenWeatherMap
 * 
 * @apiHeader {String} authorization JWT provided from Auth get
 * 
 * @apiDescription This end point is a pass through to the OpenWeatherMap API. 
 */ 
router.get("/forecast", (req, res) => {

    console.log(req.decoded)

    let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`
    
    //find the query string (parameters) sent to this end point and pass them on to
    // openweathermap api call 
    let n = req.originalUrl.indexOf('?') + 1
    if(n > 0) {
        url += '&' + req.originalUrl.substring(n)
    }

    //When this web service gets a request, make a request to the OpenWeatherMap Web service
    request(url, function (error, response, body) {
        if (error) {
            res.send(error)
        } else {
            // pass on everything (try out each of these in Postman to see the difference)
            // res.send(response);
            
            // or just pass on the body

            var n = body.indexOf("{")
            var nakidBody = body.substring(n - 1)

            res.send(nakidBody)
        }
    })

})

module.exports = router
