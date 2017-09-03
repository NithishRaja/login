
export default function(state=false, action){

  switch(action.type){
    case "LOGIN_ATTEMPT_SUCCESS":
      return true;
      break;
  }
  return state;
}
