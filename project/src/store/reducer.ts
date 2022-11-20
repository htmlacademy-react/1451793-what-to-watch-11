import { createReducer } from '@reduxjs/toolkit';

import { genreChange, setFilmList } from './action';

import { Genre } from '../const';

import { Film } from '../types/film';

import { films } from '../mocks/films';

type InitialStateType = {
  genre: typeof Genre[keyof typeof Genre];
  filmList: Film[];
};

const initialState: InitialStateType = {
  genre: Genre.AllGenres,
  filmList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(genreChange, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilmList, (state) => {
      state.filmList = films;
    });
});

export { reducer };
