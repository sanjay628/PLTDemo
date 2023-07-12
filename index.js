/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store/configureStore';

const PLTDemo = () => {
  const persister = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<App />} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => PLTDemo);
