
export default function(state="none", action){
  switch(action.type){
    case "LOGIN_ATTEMPT_START":
      return "underway";
      break;
    case "LOGIN_ATTEMPT_FAILED":
      return "failed";
      break;
  }
  return state;
}
