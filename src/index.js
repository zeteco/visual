import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/App.js';
import styles from './index.scss';

// window.setTimeout -> delay the start until after the CSS has been injected 
window.setTimeout(() => render( <AppContainer><App/></AppContainer>, document.querySelector("#app")));

if (module && module.hot) {
  module.hot.accept('./components/App/App.js', () => {
    const App = require('./components/App/App.js').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
