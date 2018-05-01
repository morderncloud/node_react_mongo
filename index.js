const keys = require("./config/keys");
const mongoose = require("mongoose");
const express = require("express");
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = new express();
require("./routes/authRoute")(app);
require('./models/User');
require("./services/passportService");

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.sessionKey]
}));

app.use()

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000
app.listen(PORT);