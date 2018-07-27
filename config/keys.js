//keys.js

if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    //we are in development - dev keys
    module.exports = require('./dev');
}