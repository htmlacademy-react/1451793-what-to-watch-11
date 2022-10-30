import { PromoMockData } from './const';
import { films } from './mocks/films';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App
        promoName={PromoMockData.PromoName}
        promoGenre={PromoMockData.PromoGenre}
        promoReleaseYear={PromoMockData.PromoReleaseYear}
        films={films}
      />
    </React.StrictMode>,
  );
} else {
  throw new Error('There is no element with ad id of #root');
}
