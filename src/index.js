import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/'
export const URL = `/weather?appid=5bce41e220e023ec6710ea4f4bc73c95&units=metric&q=`

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
