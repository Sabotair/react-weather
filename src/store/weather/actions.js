import {
  addItemStorage,
  deleteItemStorage,
  updateItemStorage,
} from '../../utils/customLocalStorage'
import {
  ADD_CITY,
  DELETE_CITY,
  UPDATE_CITY,
  UPDATE_ALL_CITY,
} from '../constants/constants'

export const getWeatherCity = (city) => {
  addItemStorage(city)
  return {
    type: ADD_CITY,
    payload: city,
  }
}
export const deleteCardWeather = (id) => {
  deleteItemStorage(id)
  return {
    type: DELETE_CITY,
    payload: id,
  }
}
export const updateCardWeather = (city) => {
  updateItemStorage(city)
  return {
    type: UPDATE_CITY,
    payload: city,
  }
}
export const updateAllCard = (city) => {
  return {
    type: UPDATE_ALL_CITY,
    payload: city,
  }
}
