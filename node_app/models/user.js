const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocacalMongoose = require('passport-local-mongoose');
//schema for User
const User = new Schema({
        admin:{
            type: Boolean,
            default:false
        }
});

//this automatically supports user storage and the passpowrd
User.plugin(passportLocacalMongoose);

//export the model User in order to use it
 module.exports = mongoose.model('User', User);