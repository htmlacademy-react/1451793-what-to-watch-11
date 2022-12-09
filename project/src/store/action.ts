import { createAction } from '@reduxjs/toolkit';

import { AppRoute, Genre } from '../const';

import { Comments } from '../types/comments';
import { CommentData } from '../types/comment-data';
import { FilmStatus } from '../types/film-status';

const loadFilmComments = createAction<Comments>('loadFilmComments');

const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('redirectToRoute');

const postComment = createAction('postComment', (value: CommentData) => ({ payload: value }));

const setActiveGenre = createAction<typeof Genre[keyof typeof Genre]>('setActiveGenre');

const getFiltredByGenreFilmList = createAction('getFiltredByGenreFilmList');

const resetFilmsCount = createAction('resetFilmsCount');

const increaseFilmsCount = createAction('increaseFilmsCount');

const changeFilmStatus = createAction('changeFilmStatus', (value: FilmStatus) => ({
  payload: value,
}));

export {
  redirectToRoute,
  loadFilmComments,
  postComment,
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
  changeFilmStatus,
};
