import { createAction } from '@reduxjs/toolkit';

import { Genre, AuthorizationStatus } from '../const';

import { Films } from '../types/films';
import { Film } from '../types/film';

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

const loadPromoFilm = createAction<Film>('loadPromoFilm');

const isDataError = createAction('setDataError');

const requireAuthorization =
  createAction<typeof AuthorizationStatus[keyof typeof AuthorizationStatus]>(
    'requireAuthorization',
  );

const setError = createAction<string | null>('setError');

export {
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
  loadFilms,
  requireAuthorization,
  loadPromoFilm,
  isDataError,
  setError
};
