import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'es6-shim';
import { App } from './components/App';
import { configureStore } from './store';

const store = configureStore();

const render = (Component: () => JSX.Element) => {

  const container = document.querySelector('.root');
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
render(App);
