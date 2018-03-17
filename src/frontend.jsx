import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Index from './components/Index'
import store from './store'

const root = document.getElementById('root')

const renderWithHMR = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root
  )
}

renderWithHMR(Index)

if (module.hot) {
  module.hot.accept('./components/Index', () => { 
    renderWithHMR(Index) 
  })
}
