const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({bye: 'bitch'});
});



//Dynamic port binding for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
    console.log('Server is running on ' + `${PORT}`)
});

// In 'package.json' : Specify Node Environment - specify "start" script, Also: create .gitignore file