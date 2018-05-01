const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new googleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        //accessToken => { is ok if only one arg
        (accessToken, refreshToken, profile, done) => {
            console.log('Saving user info into MongoDB if it does not exist..');
            User.findOne({
                googleId: profile.id
            }).then(
                (user) => {
                    if (!user) {
                        new User({
                            googleId: profile.id
                        }).save().then(user => {
                            done(null, user);
                        });
                    } else {
                        done(null, user);
                    }
                }
            )
        })
);