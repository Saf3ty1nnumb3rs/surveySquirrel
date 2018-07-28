const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // user.id is the mongo ID, useful for multiple ids ie Google, Spotify, Facebook, etc
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //Refactor for async
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //if we have a record of user
        //two arguements - error and user; if user is found the error is null
        return done(null, existingUser);
      }
      //we don't have a user match, make a new one
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
