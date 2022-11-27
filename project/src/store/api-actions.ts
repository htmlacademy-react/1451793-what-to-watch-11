import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';

import { Films } from '../types/films';
import { Film } from '../types/film';

import {
  loadFilms,
  requireAuthorization,
  loadPromoFilm,
  setFilmsDataLoading,
  redirectToRoute,
} from './action';

import { saveToken, dropToken } from '../services/token';

import { APIRoute, AuthorizationStatus, AppRoute } from '../const';

import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFilmsDataLoading(true));
  const { data } = await api.get<Films>(APIRoute.Films);
  if (data) {
    dispatch(setFilmsDataLoading(false));
    dispatch(loadFilms(data));
  } else {
    throw new Error('No data');
  }
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
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchPromoFilmAction', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(APIRoute.Promo);
  dispatch(loadPromoFilm(data));
});

export { fetchFilmsAction, loginAction, logoutAction, fetchPromoFilmAction };
