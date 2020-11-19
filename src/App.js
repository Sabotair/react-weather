import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import MainPage from './pages/MainPage'
import InfoPage from './pages/InfoPage'
import MenuNavigation from './components/Navigation/MenuNavigation'

function App() {
  return (
    <Router>
      <MenuNavigation />
      <Switch>
        <Route exact component={MainPage} path={'/react-weather'} />
        <Route exact component={InfoPage} path={'/weather'} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}

export default App
