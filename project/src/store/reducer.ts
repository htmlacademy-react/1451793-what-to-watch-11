import { createReducer } from '@reduxjs/toolkit';

import { setActiveGenre, getFiltredByGenreFilmList } from './action';

import { Genre } from '../const';

import { Film } from '../types/film';

import { films } from '../mocks/films';

type InitialStateType = {
  activeGenre: typeof Genre[keyof typeof Genre];
  filtredByGenreFilmList: Film[];
};

const initialState: InitialStateType = {
  activeGenre: Genre.AllGenres,
  filtredByGenreFilmList: films,
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
    });
});

export { reducer };
