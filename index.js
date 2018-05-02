const keys = require("./config/keys");
const mongoose = require("mongoose");
const express = require("express");
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = new express();

console.log('keys - ' + keys.googleClientID);

require('./models/User');
require("./services/passportService");

mongoose.connect(keys.mongoURI);

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.sessionKey]
}));

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoute")(app);


const PORT = process.env.PORT || 5000
app.listen(PORT);