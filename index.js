const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = new express();
const PORT = process.env.PORT || 5000

passport.use(
    new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    },
    //accessToken => { is ok if only one arg
    (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log(done);
    })
);

app.get("/hi", (req, res) => {
    res.send({
        Hi: "Bruce"
    })
});

app.get("/auth/google", passport.authenticate(
    "google", 
    // Specify what kind of user access info we request from Google
    {scope: ['profile', 'email']}
));

// On Google console (APIs & Services > Credentials > OAuth 2.0 client IDs), make sure the Authorized redirect URIs is: http://localhost:5000/auth/google/callback
app.get("/auth/google/callback", passport.authenticate("google"));

app.listen(PORT);