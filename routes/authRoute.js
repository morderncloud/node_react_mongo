const passport = require('passport');

module.exports = app => {
    app.get("/hi", (req, res) => {
        res.send({
            Hi: "Bruce"
        })
    });

    app.get("/auth/google", passport.authenticate(
        "google",
        // Specify what kind of user access info we request from Google
        {
            scope: ['profile', 'email']
        }
    ));

    // On Google console (APIs & Services > Credentials > OAuth 2.0 client IDs), make sure the Authorized redirect URIs is: http://localhost:5000/auth/google/callback
    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
    
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}