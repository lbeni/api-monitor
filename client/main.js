import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { AppContainer } from 'react-hot-loader'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <AppContainer>
      <Counter/>
    </AppContainer>,
    document.getElementById('app')
  );
});
/*
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}
render(Counter)
*/

// Hot Module Replacement API

if (module.hot) {
  module.hot.accept('./Counter', () => {
    const NextApp = require('./Counter').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

/*
if (module.hot) {
  module.hot.accept('./Counter', () => { render(Counter) })
}
*/
