# README

# setup
* run `npm install -g webpack webpack-dev-server less`
* run `npm install`

# compiling
* run `npm run build` to compile and visit `http://127.0.0.1:8080`

# testing
* run `npm test`
* write your own tests inside \__tests__ folder

# implementing with other apps
* enter url where POST request is to be submitted in **loginAttemptEpic**
* server must respond with response object which has validity set to **true** or **false**
* enter url where GET request is to be submitted in **facebookLoginAttemptEpic**
* server must rediect to implement facebook login on server side
* if login failed server must respond response object which has validity set to **false**
