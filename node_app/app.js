const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookieparser');
const session = require('express-session');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const passport = require('passport');
const authenticate = require('./authenticate');


const usersRouter = require('./routes/user');


//setting up the mongoose libary and database connection 
const mongoose = require('mongoose');
const User = require('./models/user');
const uri = "mongodb://localhost:3080/GetWorkDone";
const connect = mongoose.connect(uri);

//establishing the connection to the database
connect.then({useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

//setting the express app
const app = express();

//middlewares
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({extended: true}))
app.use(cors({ //this is the configuration object - this is so crucial
    origin: 'http://localhost:3000', //location of next app we are usingg - Change it to domain address?
    credentials: true
}));

//initialize passport to serialize user information and store in the passport session middleware
app.use(passport.initialize);
app.use(passport.session);

//handles the usersRoute endpoint
app.use('/users', usersRouter);


function auth (req, res, next) {
    console.log(req.user);

    if (!req.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
          next();
    }

    app.use(auth);

//start server
app.listen(3080, ()=> {
    console.log('Server has started!')
})
}