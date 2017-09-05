import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mergeMap";
import Rx from "rxjs/rx";

export default function(action$){
  return action$.ofType("SIGNUP_ATTEMPT_START")
          .debounceTime(500)
          .mergeMap(action =>
            Rx.Observable.ajax({
              url: "url",
              headers:{ "Content-Type": "application/json" },
              body:{ email: action.payload.email, password: action.payload.password },
              method: "POST",
              responseType: "json"})
                .pluck("response")
                .map(data => {
                  if(data.accountExists === true){
                    return {type: "LOGIN_ATTEMPT_FAILED", payload: {reason:"account-exists"}};
                  }else if(data.validation.isValid === false){
                    return {type: "LOGIN_ATTEMPT_FAILED", payload: {reason:"server-error", error:data.error}};
                  }
                })
          );

}
//
//
