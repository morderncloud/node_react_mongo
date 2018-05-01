require("./services/passportService");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const express = require("express");
const app = new express();
require("./routes/authRoute")(app);

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000
app.get("/hi", (req, res) => {
    res.send({Hi: "Bruce"})
});

app.listen(PORT);