import React from 'react'

import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { LinkedInPopUp } from 'react-linkedin-login-oauth2'
import { configureStore } from './store/configureStore'

import { Dashboard, Login } from './pages'
import { CharacterPage, PrivateRoute } from './components/'
import theme from './theme/defaultTheme'
import './App.css'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/linkedin" component={LinkedInPopUp} />
            <PrivateRoute path="/" component={Dashboard} exact />
            <Route path="/character/:id" component={CharacterPage} exact />
            <Route path="/login" component={Login} exact />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
