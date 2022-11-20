import { createReducer } from '@reduxjs/toolkit';

import {
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
} from './action';

import { Genre, FILMS_COUNT } from '../const';

import { Film } from '../types/film';

import { films } from '../mocks/films';

type InitialStateType = {
  activeGenre: typeof Genre[keyof typeof Genre];
  filtredByGenreFilmList: Film[];
  filmsCount: number;
};

const initialState: InitialStateType = {
  activeGenre: Genre.AllGenres,
  filtredByGenreFilmList: films,
  filmsCount: FILMS_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFiltredByGenreFilmList, (state) => {
      if (state.activeGenre === Genre.AllGenres) {
        state.filtredByGenreFilmList = films;
      } else {
        state.filtredByGenreFilmList = films.filter((film) => film.genre === state.activeGenre);
      }
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COUNT;
    })
    .addCase(increaseFilmsCount, (state) => {
      state.filmsCount += FILMS_COUNT;
    });
});

export { reducer };
