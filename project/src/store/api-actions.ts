import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';

import { Films } from '../types/films';
import { Film } from '../types/film';

import { loadFilms, requireAuthorization, loadPromoFilm, isDataError, setError } from './action';

import { saveToken, dropToken } from '../services/token';

import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';

import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './index';

const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('fetchFilms', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Films>(APIRoute.Films);
    if (data) {
      dispatch(loadFilms(data));
    } else {
      throw new Error('No data');
    }
  } catch {
    dispatch(isDataError());
  }
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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

const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export {
  fetchFilmsAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  fetchPromoFilmAction,
  clearErrorAction,
};
