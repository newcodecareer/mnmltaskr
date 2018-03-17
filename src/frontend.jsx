import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Index from './components/Index'
import store from './store'

const root = document.getElementById('root')

const renderWithHMR = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <AppContainer>
          <Component />
        </AppContainer>
      </HashRouter>
    </Provider>,
    root
  )
}

renderWithHMR(Index)

if (module.hot) {
  module.hot.accept('./components/Index', () => { 
    renderWithHMR(Index) 
  })
}
