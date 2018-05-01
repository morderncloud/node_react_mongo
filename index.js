const keys = require("./config/keys");
const mongoose = require("mongoose");
const express = require("express");
const app = new express();
require("./routes/authRoute")(app);
require('./models/User');
require("./services/passportService");

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000
app.get("/hi", (req, res) => {
    res.send({Hi: "Bruce"})
});

app.listen(PORT);