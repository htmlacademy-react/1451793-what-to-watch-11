import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';

import { Films } from '../types/films';
import { Film } from '../types/film';
import { Comments } from '../types/comments.js';

import { redirectToRoute, postComment, changeFilmStatus } from './action';

import { saveToken, dropToken } from '../services/token';

import { APIRoute, AppRoute } from '../const';

import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { CommentData } from '../types/comment-data.js';
import { FilmStatus } from '../types/film-status.js';

const fetchFilmsAction = createAsyncThunk<
  Films,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('fetchFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<Films>(APIRoute.Films);
  if (data) {
    return data;
  } else {
    throw new Error('No data');
  }
});

const fetchFilmAction = createAsyncThunk<
  Film,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('fetchFilm', async (filmId, { extra: api }) => {
  const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
  if (data) {
    return data;
  } else {
    throw new Error('No data');
  }
});

const fetchFilmCommentsAction = createAsyncThunk<
  Comments,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('fetchFilmComments', async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
  if (data) {
    return data;
  } else {
    throw new Error('No data');
  }
});

const fetchSimilarFilmsAction = createAsyncThunk<
  Films,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('fetchSimilarFilms', async (filmId, { extra: api }) => {
  const { data } = await api.get<Films>(`${APIRoute.Films}/${filmId}/similar`);
  if (data) {
    return data;
  } else {
    throw new Error('No data');
  }
});

const fetchFavoriteFilmsAction = createAsyncThunk<
  Films,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchFavoriteFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<Films>(APIRoute.Favorite);
  return data;
});

const changeFilmStatusAction = createAsyncThunk<
  void,
  FilmStatus,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('changeFilmStatus', async ({ filmId, status }, { dispatch, extra: api }) => {
  const { data } = await api.post<FilmStatus>(`${AppRoute.Favorite}/${filmId}/${status}`, {
    filmId,
    status,
  });
  dispatch(changeFilmStatus(data));
});

const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(redirectToRoute(AppRoute.Root));
});

const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    stat: State;
    extra: AxiosInstance;
  }
>('logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

const fetchPromoFilmAction = createAsyncThunk<
  Film,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchPromoFilmAction', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film>(APIRoute.Promo);
  return data;
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('checkAuth', async (_arg, { dispatch, extra: api }) => {
  await api.get(APIRoute.Login);
});

const postCommentAction = createAsyncThunk<
  void,
  CommentData,
  {
    dispatch: AppDispatch;
    stat: State;
    extra: AxiosInstance;
  }
>('postComment', async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
  const { data } = await api.post<CommentData>(`${APIRoute.Comments}/${filmId}`, {
    comment,
    rating,
  });
  dispatch(postComment(data));
});

export {
  fetchFilmsAction,
  loginAction,
  logoutAction,
  fetchPromoFilmAction,
  checkAuthAction,
  fetchFilmCommentsAction,
  fetchSimilarFilmsAction,
  fetchFilmAction,
  postCommentAction,
  fetchFavoriteFilmsAction,
  changeFilmStatusAction,
};
