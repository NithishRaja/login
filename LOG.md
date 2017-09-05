# LOG

* **started at 0911 on 03-09-2017**
* starting to write login component at 0912
* finished writing JSX for login component at 0928
* starting to write reducers for `isLoggedIn` state at 0931
* finished writing function for `isLoggedIn` reducer at 0935
* finished event listeners for button clicks at 0943
* finished reducer for tracking `loginAttempt` as one of ["none", "underway", "failed"] at 0956
* started writing epic for `loginAttempt` at 0958
* finished writing epic for `loginAttempt` at 1006
* `loginAttemptEpic` now contains only `debounceTime`, it doesn't make actual ajax request
* started styling using bootstrap classes at 1013
* finished basic styling at 1028
* created `TODO.md` file and added todos in it at 1029
* **ended at 1030 on 03-09-2017**

* **started at 1819 on 03-09-2017**
* starting to implement actual ajax call
* error thrown `ajax not defined`
* resolved error by importing `rxjs/rx` and accessing ajax via `Rx.Observable.ajax`
* implemented ajax call at 1908
* writing if block to ckeck if fields are completed aat 1922
* error thrown `You provided an invalid object where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.` at 1922
* undid changes and went back to previous code at 1933
* sign in works if existing email is provided, not working if new email is provided
* commented out `filter` and used `pluck` instead of `switchMap` at 1938
* trying to filter action instead of data at 1947
* found new bug at 1951
* unable to attempt login more than once. Button doesn't respond.
* couldn't locate bug at 2000
* removed all ajax components and faking async behaviour at 2001
* console error thrown `Uncaught TypeError: this.project is not a function`
* **ended at 2002 on 03-09-2017**

* **started at 2035 on 03-09-2017**
* used `mapTo` instead of `switchMap` at 2044
* error resolved
* bug still remains
* removed bug by listening for event both from `componentDidMount` and `componentDidUpdate`
* for the first click, listener in componentDidMount is fired. For every other click, listener is componentDidUpdate is fired
* added async functionality and actual ajax calls at 2056
* using filter to remove data obtained from ajax call causes code to work only if email exists
* dropped get request and wrote a post request at 2152
* post request working as expected
* adding comments for functions
* finished adding comments at 2211
* starting to implement facebook login 2228
* started implementing `loginAttemptResetEpic` at 2232
* finished implementation of `loginAttemptResetEpic` at 2235
* finished facebook login at 2249
* works as expected
* should add option for a signup page
* **ended at 2256 on 03-09-2017**

* **started at 0801 on 04-09-2017**
* deciding how to implement sign up
* method 1: could make a facebook style login page with sign in and signup in a single page
* this doesn't involve react-router but involves handling 2 form submissions
* method 2: could make a seperate page for signup
* this involves react-router but seperates forms and functionality
* decided to go with method 2 at 0809
* starting to add react-router at 0810
* run `npm install --save react-router-dom`
* run `npm shrinkwrap`
* error thrown **peer invalid**, must update npm to avoid this error
* run `npm run build`
* console error thrown `Uncaught Error: React.Children.only expected to receive a single React element child.`
* console warning thrown `Warning: You tried to redirect to the same route you're currently on: "/login"`
* removed route for **sign up** at 0824
* router works as expected now
* included **sign up**, but wrapped routes in a div at 0827
* router still works as expected
* created test component to check rendering of signup page at 0832
* router render component correctly at 0833
* **ended at 0853 on 04-09-2017**

* **started at 1047 on 04-09-2017**
* removed redirect and changed path for login component from `/login` to `/` at 1047
* warning `Warning: You tried to redirect to the same route you're currently on: "/login"` no longer appears
* started writing component for not found page at 1050
* finished basic not found page at 1055
* added a go back to login page link to not found page at 1100
* started writing component for sign up page at 1102
* stopped writing component for sign up page at 1102
* started refactoring login component instead
* seperated all JSX from render and moved it into constructor at 1111
* refactoring login component finished at 1116
* started writing component for sign up page at 1119
* finished connecting signup component with router via **signupContainer** at 1124
* **ended at 1125 on 04-09-2017**

* **started at 1140 on 04-09-2017**
* started to write view for signup component at 1142
* finished writing JSX for signup component at 1157
* **ended at 1157 on 04-09-2017**

* **started at 1218 on 04-09-2017**
* added link to go back to login page in signup page at 1226
* started styling signup component at 1227
* finished styling signup component at 1236
* **ended at 1239 on 04-09-2017**

* **started at 0852 on 05-09-2017**
* started writing props for signup component at 0900
* found out that **isLoggedIn** prop for login page is redundant at 0903
* found bug at 0911
* **alertJSX** does not render on button click
* **alertJSX** renders when if block is placed inside render
* moved if block to **componentWillMount** at 0925
* **alertJSX** doesn't render when if block is inside **componentWillMount**
* placed if block inside **render** for now
* both component working as expected at 0930
* started writing epic for signup component at 0931
* finished epic for signup component at 0940
* epic working as expected
* must add actual ajax functionality inside epic
* **ended at 0940 on 05-09-2017**

* **started at 1200 on 05-09-2017**
* started writing code to check if passwords match
* decided to write epics to check for blank fields and matching passwords before dispatching ajax calls at 1254
* **ended at 1255 on 05-09-2017**

* **started at 1545 on 05-09-2017**
* started moving ckecking empty fields and password matches into epics at 1546
* changed decision to check empty fields and password matches in component at 1610
* **ended at 1612 on 05-09-2017**

* **started at 0005 on 06-09-2017**
* trying new approach for checking empty fields and password matches at 0006
* added new alerts for server error and empty fields at 0017
* added validations inside observable sunscriber at 0028
* app woking as expected
* 
