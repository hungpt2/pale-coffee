var express = require('express'),
  config = require('./config'),
  app = express(),
  port = process.env.PORT || 3000,
  cors = require('./cors'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  //created model loading here
  Task = require('./api/models/accounts');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.url_db); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//importing route
var routes = require('./api/routes/accounts'); 
routes(app); //register the route

app.listen(port);

console.log('PRS RESTful API server started on: ' + port);
