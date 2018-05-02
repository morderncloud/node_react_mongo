//console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
    //console.log('prod');
} else {
    module.exports = require('./dev');
    //console.log('dev');
}