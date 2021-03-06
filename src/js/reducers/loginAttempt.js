
export default function(state="none", action){
  switch(action.type){
    case "LOGIN_ATTEMPT_START":
      return "underway";
      break;
    case "LOGIN_ATTEMPT_FAILED":
    if(action.payload.error) console.log(action.payload.error);
      return action.payload.reason;
      break;
    case "LOGIN_ATTEMPT_RESET":
      return "none";
      break;
    case "FACEBOOK_LOGIN_ATTEMPT_START":
      return "underway";
      break;
  }
  return state;
}
