var express = require('express');
var app = express();
var yelpController = require("./controllers/yelpController")
var flightController = require("./controllers/flightController")
var bodyParser = require('body-parser')


var cors = require('cors');
var Yelp = require('yelp');

// helps with yelp api

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/', yelpController.yelpSearch)
app.post('/yelpSearch', yelpController.yelpSearchById)

app.post('/flights', flightController.flightSearch)


app.listen(3000);
