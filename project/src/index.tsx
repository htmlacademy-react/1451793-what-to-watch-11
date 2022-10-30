import { Setting, PromoMockData } from './const';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App
        filmsCount={Setting.FilmsCount}
        promoName={PromoMockData.PromoName}
        promoGenre={PromoMockData.PromoGenre}
        promoReleaseYear={PromoMockData.PromoReleaseYear}
      />
    </React.StrictMode>,
  );
} else {
  throw new Error('There is no element with ad id of #root');
}
