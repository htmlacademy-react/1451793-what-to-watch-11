import { Setting, PromoMockData } from './const';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

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
