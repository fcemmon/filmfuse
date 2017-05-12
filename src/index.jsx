import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

import helloStore from './stores/HelloStore';
import authStore from './stores/AuthStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();


const stores = {
    routing: routingStore,
    authStore: authStore,
    helloStore: helloStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

console.log(stores);
console.log(history);
render(
  <AppContainer>
      <Provider {...stores}>
          <Router history={history}>
            <App />
          </Router>
      </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
          <Provider {...stores}>
              <Router history={history}>
                <NextApp />
              </Router>
          </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
