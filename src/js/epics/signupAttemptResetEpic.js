import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mapTo";

export default function(action$){
  return action$.ofType("SIGNUP_ATTEMPT_START")
    .debounceTime(500)
    .mapTo({type: "SIGNUP_ATTEMPT_RESET"});
}
