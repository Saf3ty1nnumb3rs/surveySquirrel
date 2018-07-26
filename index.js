const express = require("express");
require('./services/passport')


const app = express();

// requires exported function and immediately calls it using 'app'
require('./routes/authController')(app);


//Dynamic port binding for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on " + `${PORT}`);
});

// In 'package.json' : Specify Node Environment - specify "start" script, Also: create .gitignore file
