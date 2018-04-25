const express = require("express");
const app = new express();

app.get("/hi", (req, res) => {
    res.send({Hi: "Bruce"})
});

app.listen(5000);