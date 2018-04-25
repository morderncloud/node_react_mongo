# Readme

## Initialize the project

npm init

## Add Express

npm install --save express

## Create app and run it

create index.js

``` javascript
const express = require("express");
const app = new express();
const PORT = process.env.PORT || 5000

app.get("/hi", (req, res) => {
    res.send({Hi: "Bruce"})
});

app.listen(PORT);
```

node index.js

## Use Heroku

* Sign up at https://signup.heroku.com

* Install Heroku cli on local

    brew install heroku
    heroku -v

* Create heroku app

heroku create
https://whispering-retreat-20762.herokuapp.com/ | https://git.heroku.com/whispering-retreat-20762.git





