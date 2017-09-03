
export default function(state="world", action){
  switch(action.type){
    case "CHANGE_MESSAGE_TO_EVERYONE":
      return "everyone";
      break;
    case "CHANGE_MESSAGE_TO_WORLD":
      return "world";
      break;
  }
  return state;
}
