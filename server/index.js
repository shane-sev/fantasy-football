//import libraries
const express = require('express');
const mongoose = require('mongoose');

//import the feed
const feed = require('./routes/feed');
const add = require('./routes/add');
const teams = require('./routes/teams');

//import .env file
require('dotenv').config();

//set url of database
const uri = process.env.ATLAS_URI;

//connect to MongoDB database
mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => console.log('Database connection successful'))
    .catch(err => console.log('Database connection failed:' + err));

//creates app
const app = express();

//sets port
port = 5000;

//sets up middle-ware to read http request body types
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//sets up middle-ware to read the route
app.use('/test', feed);
app.use('/teams', teams);

//run
app.listen(port, () => console.log('Server running on port ' + port));


