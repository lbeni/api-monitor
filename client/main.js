import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}
render(Counter)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Counter', () => { render(Counter) })
}
