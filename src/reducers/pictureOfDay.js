import { FETCH_PICTURE_OF_DAY } from "../utils/types";

export const pictureOfDayReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PICTURE_OF_DAY":
      return (state = action.value);

    default:
      return state;
  }
};
