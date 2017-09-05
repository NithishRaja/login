import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mergeMap";
import Rx from "rxjs/rx";

export default function(action$){
  return action$.ofType("LOGIN_ATTEMPT_START")
          //waiting for 500ms to let alert display
          //remove debounceTime during actual use
          .debounceTime(500)
          .mergeMap(action =>
              //ajax POST request to server for verification
              Rx.Observable.ajax({url:"url",
              headers:{ "Content-Type": "application/json" },
              body:{ email: action.payload.email, password: action.payload.password },
              method: "POST",
              responseType: "json"})
                .pluck("response")
                .map(response => {
                  //checking if verified
                  if(response.accountExists === false){
                    return {type: "LOGIN_ATTEMPT_FAILED", payload:{reason:"account-doesnot-exist"}};
                  }else if(response.validation.isValid === false){
                    return {type: "LOGIN_ATTEMPT_FAILED", payload:{reason:"wrong-password"}};
                  }else if(response.error){
                    return {type: "LOGIN_ATTEMPT_FAILED", payload:{reason:"server-error", error:response.error}};
                  }
            })
          );
}
