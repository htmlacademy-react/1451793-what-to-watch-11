import { createReducer } from '@reduxjs/toolkit';

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
  //
});

export { reducer };
