
export default function(action$){
  return action$.ofType("CHANGE_MESSAGE_TO_EVERYONE")
    .delay(1000)
    .mapTo({type: "CHANGE_MESSAGE_TO_WORLD"});
}
