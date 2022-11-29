import { createAction } from '@reduxjs/toolkit';

import { Genre, AuthorizationStatus, AppRoute } from '../const';

import { Films } from '../types/films';
import { Film } from '../types/film';
import { Comments } from '../types/comments';
import { CommentData } from '../types/comment-data';

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

const loadFilmComments = createAction<Comments>('loadFilmComments');

const loadFilm = createAction('loadFilm', (value: Film) => ({ payload: value }));

const loadSimilarFilms = createAction('loadSimilarFilms', (value: Films) => ({ payload: value }));

const loadPromoFilm = createAction<Film>('loadPromoFilm');

const setFilmsDataLoading = createAction<boolean>('setFilmsDataLoading');

const requireAuthorization =
  createAction<typeof AuthorizationStatus[keyof typeof AuthorizationStatus]>(
    'requireAuthorization',
  );

const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('redirectToRoute');

const postComment = createAction('postComment', (value: CommentData) => ({ payload: value }));

export {
  redirectToRoute,
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
  loadFilms,
  loadFilm,
  loadFilmComments,
  loadSimilarFilms,
  requireAuthorization,
  loadPromoFilm,
  setFilmsDataLoading,
  postComment,
};
