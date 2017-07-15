import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureUrlQuery } from 'react-url-query';
import App from './components/App/App';
import history from './history';


import './index.scss';
import '../assets/images/favicon.ico';

// link the history used in our app to url-query so it can update the URL with it.
configureUrlQuery({ history });

// window.setTimeout -> delay the start until after the CSS has been injected
window.setTimeout(() => render(<AppContainer><App /></AppContainer>, document.querySelector('#app')));

if (module && module.hot) {
  module.hot.accept('./components/App/App', () => {
    const App = require('./components/App/App').default;
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.querySelector('#app'),
    );
  });
}
