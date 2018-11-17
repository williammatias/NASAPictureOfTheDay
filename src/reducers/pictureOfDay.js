import {FETCH_PICTURE_OF_DAY} from "../utils/types";

export const pictureOfDay = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_PICTURE_OF_DAY':
            return state = action.value;

        default:
            return state;
    }
};