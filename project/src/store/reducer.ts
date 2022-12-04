import { createReducer } from '@reduxjs/toolkit';

import {
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
  loadFilms,
  loadPromoFilm,
  setFilmsDataLoading,
  loadFilmComments,
  loadSimilarFilms,
  loadFilm,
} from './action';

import { Genre, FILMS_COUNT } from '../const';

import { Films } from '../types/films';
import { Film } from '../types/film';
import { Comments } from '../types/comments';

type InitialState = {
  activeGenre: typeof Genre[keyof typeof Genre];
  film: Film | null;
  films: Films;
  promoFilm: Film | null;
  filtredByGenreFilmList: Films;
  filmsCount: number;
  isFilmsDataLoading: boolean;
  reviews: Comments;
  similarFilms: Films;
};

const initialState: InitialState = {
  activeGenre: Genre.AllGenres,
  film: null,
  films: [],
  promoFilm: null,
  filtredByGenreFilmList: [],
  filmsCount: FILMS_COUNT,
  isFilmsDataLoading: false,
  reviews: [],
  similarFilms: [],
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
      state.films = action.payload;
      state.filtredByGenreFilmList = action.payload;
    })
    .addCase(loadFilmComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setFilmsDataLoading, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    });
});

export { reducer };
