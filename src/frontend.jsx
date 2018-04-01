import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Index from './components/Index'
import store from './store'
import history from './history'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Router>
    </Provider>,
    root
  )
}

render(Index)
