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

## login
* enter url where POST request is to be submitted in **loginAttemptEpic**
* server must redirect if login is successful
* server must respond with response object with the following if login fails
  {
    accountExists: [true, false],
    validation: {
      isValid: [true, false]
    },
    error: {
      error object comes here
    }
  }
* enter url where GET request is to be submitted in **facebookLoginAttemptEpic**
* server must rediect to implement facebook login on server side


## signup
* enter url where POST request is to be submitted in **signupAttemptEpic**
* server must redirect if signup is successful
* server must respond with response object with the following
{
  accountExists: [true, false],
  error: {
    error object comes here
  }
}

## not found
* trying to visit page other than login and signup will render a not found page
* not found page has links to both login and signup
