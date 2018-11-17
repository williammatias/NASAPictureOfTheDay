import fetch from 'cross-fetch'
import {FETCH_PICTURE_OF_DAY} from '../utils/types';

export function fetchPictureOfDay() {
  return function(dispatch) {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=l2g7qnlNSUHY9D4tEu0JmVLOPsLY9ICb7uJOuZ2i`)
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json =>
            dispatch(receivePictureOfDay(json))
        )
  }
}

export function receivePictureOfDay(pictureOfDay) {
    return {
        type: FETCH_PICTURE_OF_DAY,
        value: pictureOfDay
    }
}