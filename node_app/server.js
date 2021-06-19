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

//connecting mongodb
mongoose.connect("mongodb+srv://nyambura00:nyambura@mongodb@cluster0.xwxfs.mongodb.net/getsworkdone.com?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => console.log('mongoose is successfully connected!'))

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
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
          });
          await newUser.save();
          res.send("User Created");
        }
    });
})
app.get('/user', (req, res)=> {
    res.send(req.user);
})

//start server
app.listen(3080, ()=> {
    console.log('Server has started!')
})