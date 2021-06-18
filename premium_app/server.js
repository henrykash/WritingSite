const { urlencoded } = require('express')
const express = require('express')
const app = express()

//ejs is a templating engine template that encourages more devt with Javascript
app.set('view-engine', 'ejs') //setting the 'views' configuration to ejs
app.use(urlencoded({extended: false})) //trying to build access themes for the relative input elements (getting to read the input values from body)

app.get('/',(req, res) => {
    res.render('index.ejs'); 
})

app.get('/login',(req, res) => { //configuring the relative login path
    res.render('login.ejs');
})

//Creating a custom callback
app.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });
  

app.get('/signup',(req, res) => {
    res.render('signup.ejs', {name: "Gets Work Done"}); //encapsulation highly achieved.
})

app.post('/signup', (req, res) => { //

})

app.listen(3000);