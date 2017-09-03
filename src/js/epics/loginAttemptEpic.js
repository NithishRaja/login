import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mergeMap";
import Rx from "rxjs/rx";

export default function(action$){
  return action$.ofType("LOGIN_ATTEMPT_START")
          .debounceTime(500)
          .mergeMap(action =>
              Rx.Observable.ajax({ url:"./credentials.json", method:"GET", responseType:"json" })
                .pluck("response")
                .map(data => {
                  console.log(action);
                  console.log(JSON.stringify(data));
                  return {type:"LOGIN_ATTEMPT_FAILED"};
            }));
}
