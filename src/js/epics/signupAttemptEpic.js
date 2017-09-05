import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mapTo";
// import "rxjs/add/operator/mergeMap";
// import Rx from "rxjs/rx";

export default function(action$){
  return action$.ofType("SIGNUP_ATTEMPT_START")
    .debounceTime(500)
    .mapTo({type: "SIGNUP_ATTEMPT_FAILED", payload: {reason: "account-exists"}});
}
