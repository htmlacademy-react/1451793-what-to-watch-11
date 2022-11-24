import { Provider } from 'react-redux';

import { store } from './store';
import { fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
} else {
  throw new Error('There is no element with ad id of #root');
}
