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

Note: index.js and package.json should be in the root of the repo folder. Or the build might fail.

heroku create
https://whispering-retreat-20762.herokuapp.com/ | https://git.heroku.com/whispering-retreat-20762.git

git add .
git commit -m "prepare for heroku"
// Add a remote repo
git remote add heroku https://git.heroku.com/whispering-retreat-20762.git
// Push master to the new remote repo
git push heroku master


``` javascript
    ...
    remote:        https://whispering-retreat-20762.herokuapp.com/ deployed to Heroku
    remote:
    remote: Verifying deploy... done.
    To https://git.heroku.com/whispering-retreat-20762.git
    * [new branch]      master -> master
    ...
```

* Open app

heroku open
https://whispering-retreat-20762.herokuapp.com/hi

* Show logs

heroku logs

* Heroku dashboard

https://dashboard.heroku.com/apps


## Authentication through OAuth, like Google, Facebook, Twitter

* http://www.passportjs.org/

npm install --save passport passport-google-oauth20

## Register Google Developer, create a project, Enable Googe + API (OAuth 2.0 would be enabled), create credential




