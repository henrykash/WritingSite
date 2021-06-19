const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookieparser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({ //this is the configuration object - this is so crucial
    origin: 'http://localhost:3000', //location of next app we are usingg - Change it to domain address?
    credentials: true
}))
app.use(session({
    secret: 'secret code',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser("secret code"))

//relative routes
app.post('/login', (req, res)=> {
    console.log(req.body)
})
app.post('/register', (req, res)=> {
    console.log(req.body)
})
app.get('/user', (req, res)=> {
    console.log(req.body)
})

//start server
app.listen(3080, ()=> {
    console.log('Server has started!')
})