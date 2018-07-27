const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//MUST REQUIRE MODEL BEFORE USING MODEL - ORDER MATTERS
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
//COOKIE AND PASSPORT INITIALIZATION
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
// requires exported function and immediately calls it using 'app'
require('./routes/authController')(app);

//Dynamic port binding for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on " + `${PORT}`);
});

// In 'package.json' : Specify Node Environment - specify "start" script, Also: create .gitignore file
