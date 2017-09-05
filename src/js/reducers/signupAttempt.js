
export default function(state="none", action){
  console.log(action);
  switch(action.type){
    case "SIGNUP_ATTEMPT_START":
      return "underway";
      break;
    case "SIGNUP_ATTEMPT_RESET":
      return "none";
      break;
    case "SIGNUP_ATTEMPT_FAILED":
      return action.payload.reason;
      break;
  }
  return state;
}
