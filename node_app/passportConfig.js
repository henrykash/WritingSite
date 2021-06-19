const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => { //defining a LocalStrategy function that will consistently get re-used
      User.findOne({ username: username }, (err, user) => { //looking at the user in the database
        if (err) throw err;
        if (!user) return done(null, false); //no error no user
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => { //persists user data into session
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {  //function that retrieves data from the user session
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};