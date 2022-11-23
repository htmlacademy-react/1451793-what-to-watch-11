import { createAction } from '@reduxjs/toolkit';

import { Genre } from '../const';

import { Films } from '../types/films';

const setActiveGenre = createAction(
  'setActiveGenre',
  (value: typeof Genre[keyof typeof Genre]) => ({
    payload: value,
  }),
);

const getFiltredByGenreFilmList = createAction('setFilmList');

const resetFilmsCount = createAction('resetFilmsCount');

const increaseFilmsCount = createAction('increaseFilmsCount');

const loadFilms = createAction<Films>('loadFilms');

export {
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
  loadFilms,
};
