
export default function(state="none", action){
  switch(action.type){
    case "SIGNUP_ATTEMPT_START":
      return "underway";
      break;
    case "SIGNUP_ATTEMPT_RESET":
      return "none";
      break;
    case "SIGNUP_ATTEMPT_FAILED":
      if(action.payload.error) console.error(action.payload.error);
      return action.payload.reason;
      break;
  }
  return state;
}
