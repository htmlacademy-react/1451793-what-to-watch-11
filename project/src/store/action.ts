import { createAction } from '@reduxjs/toolkit';

import { AppRoute, Genre } from '../const';

import { Comments } from '../types/comments';
import { CommentData } from '../types/comment-data';

const loadFilmComments = createAction<Comments>('loadFilmComments');

const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('redirectToRoute');

const postComment = createAction('postComment', (value: CommentData) => ({ payload: value }));

const setActiveGenre = createAction<typeof Genre[keyof typeof Genre]>('setActiveGenre');

const getFiltredByGenreFilmList = createAction('getFiltredByGenreFilmList');

const resetFilmsCount = createAction('resetFilmsCount');

const increaseFilmsCount = createAction('increaseFilmsCount');

export {
  redirectToRoute,
  loadFilmComments,
  postComment,
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
};
