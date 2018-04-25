const express = require("express");
const app = new express();
const PORT = process.env.PORT || 5000

app.get("/hi", (req, res) => {
    res.send({Hi: "Bruce"})
});

app.listen(PORT);