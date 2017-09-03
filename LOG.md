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
