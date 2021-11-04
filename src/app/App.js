import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import messages from '../i18n';
import store from './store';
import rootSaga from './store/rootSaga';
import withSaga from './store/withSaga';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './AppLayout';
import T3dTheme from './theme/T3dTheme';

function App() {
  return (
    <IntlProvider locale="en" messages={messages["en"]}>
      <Provider store={store}>
        <Router>
          <T3dTheme>
            <AppLayout />
          </T3dTheme>
        </Router>
      </Provider>
    </IntlProvider> 
  );
}

export default withSaga(rootSaga)(App);
