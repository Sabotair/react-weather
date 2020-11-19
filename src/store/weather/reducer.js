import {
  ADD_CITY,
  DELETE_CITY,
  UPDATE_CITY,
  UPDATE_ALL_CITY,
} from '../constants/constants'

let initialState = { city: [] }

if (localStorage.length !== 0) {
  const data = JSON.parse(localStorage.getItem('cities'))
  initialState.city = data
}

export function weaterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY:
      return { ...state, city: [...state.city, action.payload] }
    case DELETE_CITY:
      return { city: state.city.filter((city) => city.id !== action.payload) }
    case UPDATE_CITY:
      return {
        ...state,
        city: state.city.map((city) => {
          if (city.id !== action.payload.id) {
            return city
          } else {
            return action.payload
          }
        }),
      }
    case UPDATE_ALL_CITY:
      return { ...state, city: action.payload }
    default:
      return state
  }
}
