# LOG

* **started at 1900 on 30 aug 2017**
* initial commit at 1907
* created github project `https://github.com/NithishRaja/logger.git` at 1908
* pushed to origin at 1910
* created folders for actions, components, containers and reducers at 1915
* created redux store at 1919
* error thrown `Can't resolve 'react-redux' in 'C:\Users\Nithish Raja.G\development\logger\src\js'`
* run `npm install --save react-redux` at 1920
* error thrown `Can't resolve 'redux' in 'C:\Users\Nithish Raja.G\development\logger\src\js'`
* run `npm install --save redux` at 1921
* error resolved
* added `allReducers` to store at 1925
* created `loginComponent.js` inside components at 1927
* created login component at 1930
* wrote view for signin at 1936
* lint error thrown `in ./src/js/components/loginComponent.js, 19:17  error  Missing semicolon  semi`
* added `;`, error resolved
* created `loginContainer.js` at 1939
* refactored to use `loginContainer` at 1942
* console warning thrown `Warning: Unknown DOM property for. Did you mean htmlFor?` at 1948
* error resolved by using htmlFor
* implemented reacr-router
* error thrown `Can't resolve 'react-router' in 'C:\Users\Nithish Raja.G\development\logger\src\js'`
* run `npm install --save react-router` at 1956
* error resolved
* created `layout.js` at 2000
* console error thrown `Uncaught ReferenceError: Layout is not defined` at 2006
* console error thrown `Failed prop type: The prop 'history' is marked as required in 'Router', but its value is 'undefined'.`
* console error thrown `Cannot read property 'location' of undefined`
* **ended at 2010 on 30 aug 2017**

* **started at 2102 on 30 aug 2017**
* need to upgrade to react-router v4 to avoid errors
* used `react-router-dom` to solve most errors
* console error thrown `Cannot read property 'location' of undefined`
* error resolved by using HashRouter at 2132
* console error thrown `A <Router> may have only one child element`
* error resolved by wrapping routes and redirect in `<Switch />`
* console warning thrown `You tried to redirect to the same route you're currently on: "/login"`
* decided to ignore warning for now
* seperated layout as head and foot and section to simplify rendering
* console error thrown `Uncaught ReferenceError: React is not defined`
* error resolved by using the following import statement `import React, {Component} from "react"` at 2212
* started to add actions and reducers for login
* changes have been added but not comitted yet
* started login reducer but not completed
* **ended at 2217 on 30 aug 2017**

* **started at 0827 on 31 aug 2017**
* wrote loginReducer at 0833
* renamed loginReducer to isLoggedIn at 0837
* passed isLoggedIn as prop to logginComponent at 0837
* created action `authenticateLogin` at 0851
* `authenticateLogin` action working at 0856
* wrote code to notify user if login credentials donot match at 0902
* logic error page doesn't re-render after \_alertJSX changes
* changing state via action to solve problem
* workaround for displaying message done at 0923
* console warning thrown `setState(...): Cannot update during an existing state transition`
* ignoring warning for now
* imported bootstrap for css at 0928
* added bootstrap classes for headComponent at 0932
* used bootstrap panel classes fot styling section at 0946
* have to style form
* **ended at 0946 on 31 aug 2017**

* **started at 1324 on 31 aug 2017**
* display form to fill the div (not using form-inline)
* added alert class to \_alertJSX
* started to write tests for components with jest at 1400
* unable to run tests
* error thrown `react-dom@15.5+ and react-test-renderer are implicit dependencies when using react@15.5+ with enzyme` at 1408
* included `react-test-renderer` explicitly inside `package.json`
* error not resolved at 1418
* error resolved and installed `react-test-renderer` at 1420
* finished writing tests for layout-components and login-component at 1505
* passed all tests at 1506
* **ended at 1507 on 31 aug 2017**

* **started at 2000 on 31 aug 2017**
* installed `rxjs` at 2005
* using rxjs for simple click listener at 2011
* unable to target button with subscribing inside render at 2020
* moved observable to componentDidMount at 2022
* resolved the above problem
* props not changing inside componentDidMount at 2030
* observable next function is called only once when placed inside componentDidMount
* moved observable to inside componentDidUpdate at 2048
* now observable next function is called every button click
* redirect page after login
* dropped idea to redirect after login at 2112
* decided to seperate login from single page app
* let server render the single page app
* use redux observable to achieve this
* **ended at 2115 on 31 aug 2017**

* **started at 0653 on 03 sep 2017**
* decided to scrub while repo and start from scratch
* **ended at 0655 on 03 sep 2017**
