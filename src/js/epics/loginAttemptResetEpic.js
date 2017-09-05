import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mapTo";

export default function(action$){
  return action$.ofType("LOGIN_ATTEMPT_FAILED")
    .debounceTime(1500)
    .mapTo({ type:"LOGIN_ATTEMPT_RESET" });
}
