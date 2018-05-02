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

## Auto restart node server after a change

* npm install --save nodemon
* Add script dev
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },

* npm run dev

## Use external thirdparty mongoDB

* [Cloud MongoDB](https://mlab.com/)
* Sandbox 500MB
* To connect using the mongo shell:

    mongo ds263989.mlab.com:63989/bluemongo -u <dbuser> -p <dbpassword>

* To connect using a driver via the standard MongoDB URI (what's this?):

    mongodb://<dbuser>:<dbpassword>@ds263989.mlab.com:63989/bluemongo

## Install module Mongoose

npm install --save mongoose

## Install module cookie-session

npm install --save cookie-session

## Install module create-react-app

* sudo npm install -g create-react-app

* create-react-app client

* cd client && npm start

## Install module concurrently

* npm install --save concurrently

## Git mgmt

* Revert a local commit

git reflog
git reset $hash

* Revert a pushed commit

git reflog
git revert $hash1 $hashN

* Override local change with pushed commit on the repo

git checkout -- $filename 
or all local changes
git checkout .

* Remove/discard untracked file(f) or directories(-fd):

git clean -f
git clean -fd

* Merge created branch with master branch 

You need to be in the created branch.

// checkout a current branch
git checkout NAME-OF-BRANCH 
// or create a new branch
git checkout -b $branchName 
git merge master

* Merge master branch with created branch 

You need to be in the master branch.

git checkout master
git merge NAME-OF-BRANCH

* Added in node_branch2

* Checkout master > create a branch > make changes > commit & push > merge master with the created branch

git checkout $masterRepo
git checkout -b $myBranch
git status
make some changes
git add .
git commit -m "modified in my branch"
git push origin $myBranch
git checkout master
git merge $myBranch
git status
git push

* To delete branch

// remote
git push -d origin $myBranch
// local 
git branch -D $myBranch

* Tagging

// local
git tag $myTag -a

// remote
git push origin $myTag
or push all tags to remote repo
git push origin --tags

* Tag vs. branch

separate thread of development that may run concurrently with other development efforts on the same code base. Changes to a branch may eventually be merged back into another branch to unify them.




