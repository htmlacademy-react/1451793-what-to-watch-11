import { createReducer } from '@reduxjs/toolkit';

import {
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
  loadFilms,
  requireAuthorization,
} from './action';

import { Genre, FILMS_COUNT, AuthorizationStatus } from '../const';

import { Films } from '../types/films';

type InitialState = {
  activeGenre: typeof Genre[keyof typeof Genre];
  films: Films;
  filtredByGenreFilmList: Films;
  filmsCount: number;
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
};

const initialState: InitialState = {
  activeGenre: Genre.AllGenres,
  films: [],
  filtredByGenreFilmList: [],
  filmsCount: FILMS_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFiltredByGenreFilmList, (state) => {
      if (state.activeGenre === Genre.AllGenres) {
        state.filtredByGenreFilmList = state.films;
      } else {
        state.filtredByGenreFilmList = state.films.filter(
          (film) => film.genre === state.activeGenre,
        );
      }
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COUNT;
    })
    .addCase(increaseFilmsCount, (state) => {
      state.filmsCount += FILMS_COUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.filtredByGenreFilmList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
