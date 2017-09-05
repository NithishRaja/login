
export default function(state="none", action){
  switch(action.type){
    case "LOGIN_ATTEMPT_START":
      return "underway";
      break;
    case "LOGIN_ATTEMPT_FAILED":
      return "failed";
      break;
    case "LOGIN_ATTEMPT_SUCCESS":
      return "none";
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
