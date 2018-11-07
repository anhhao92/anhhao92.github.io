import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import ConnectedIntlProvider from './i18n/i18nProvider';
import store, { history } from './store';
import App from './components/App/App';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedIntlProvider>
        <App />
      </ConnectedIntlProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
