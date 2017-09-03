
export default function(state=false, action){

  switch(action.type){
    case "LOGIN_VERIFIED":
      return true;
      break;
  }
  return state;
}
