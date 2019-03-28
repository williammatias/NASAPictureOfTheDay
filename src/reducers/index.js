import { pictureOfDayReducer } from "./pictureOfDay";

function reducers({ pictureOfDay }, action) {
  console.log("action");
  return {
    pictureOfDay: pictureOfDayReducer(pictureOfDay, action)
  };
}
