import { createAction } from '@reduxjs/toolkit';

import { Genre } from '../const';

const setActiveGenre = createAction(
  'setActiveGenre',
  (value: typeof Genre[keyof typeof Genre]) => ({
    payload: value,
  }),
);

const getFiltredByGenreFilmList = createAction('setFilmList');

const resetFilmsCount = createAction('resetFilmsCount');

const increaseFilmsCount = createAction('increaseFilmsCount');

export { setActiveGenre, getFiltredByGenreFilmList, resetFilmsCount, increaseFilmsCount };
