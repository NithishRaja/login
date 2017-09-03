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
                  data.forEach((data) => {
                    if(action.payload.email === data.email&&action.payload.password === data.password){
                      console.log("true");
                      action.payload = {email: action.payload.email, password: action.payload.password, validity: true};
                    }
                  });
                  console.log(action);
                  if(action.payload.validity){
                    return {type:"LOGIN_ATTEMPT_SUCCESS"};
                  }else{
                    return {type:"LOGIN_ATTEMPT_FAILED"};
                  }
            }));
}
