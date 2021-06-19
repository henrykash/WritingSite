//setting the relative user schema 

const mongoose = require('mongoose');
const user = new mongoose.Schema( //posting users to the database
    {
        username: string,
        password: string
    }
);

module.exports = mongoose.model("User", user)