const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookieparser')
const bcrypt = require('bcryptjs')
const session = require('express-session') //this is our session middleware
const bodyParser = require('body-parser')
const app = express()
const nextconnect = require('next-connect')

//connecting to mongodb with the connect method
mongoose.connect("process.env.MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => console.log('mongoose is successfully connected!'))
//checking whether the connection is successful
const db = mongoose.connection
db.once('open', _ => {
console.log('Database connected:', url)
})

db.on('error', err => {
console.error('connection error:', err)
})

//middlewares
const middlewares = nextconnect()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
/*app.use(cors({ //this is the configuration object - this is so crucial
    origin: true, //location of next app we are usingg - Change it to domain address?
    credentials: true
}))*/
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(passport.initialize())
app.use(passport.session())
require("./passportConfig")(passport); //passing an instance of passport being used as a parameter


//routing section
app.post('/login', (req, res, next)=> {
    passport.authenticate("local", (err, user, info) => { //passing username and password to the Passport Local Strategy
        if (err) throw err;
        if (!user) res.send("No User Exists. Sign up instead."); //no user? A need for a sign up activity 
        else {
          req.logIn(user, (err) => { 
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.user);
          });
        }
    })(req, res, next);
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
    res.send(req.user); //user gets to be stored in a request user. We get to use everything that come with the relative object details
})

//start server
app.listen(3080, ()=> {
    console.log('Server has started!')
})

