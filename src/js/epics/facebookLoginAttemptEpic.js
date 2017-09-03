import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mergeMap";
import Rx from "rxjs/rx";

export default function(action$){
  return action$.ofType("FACEBOOK_LOGIN_ATTEMPT_START")
          //waiting for 500ms to let alert display
          //remove debounceTime during actual use
          .debounceTime(500)
          .mergeMap(action =>
            //ajax GET request to server for verification
            Rx.Observable.ajax({url:"url", method:"GET", responseType:"json"})
              .pluck("response")
              .map(data => {
                if(data.validity === false){
                  return {type: "LOGIN_ATTEMPT_FAILED"};
                }
              })
          );
}
