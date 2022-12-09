import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FILMS_COUNT, Genre } from '../../const';
import { SiteProcess } from '../../types/state';
import {
  setActiveGenre,
  getFiltredByGenreFilmList,
  resetFilmsCount,
  increaseFilmsCount,
} from '../action';

import {
  fetchFilmAction,
  fetchFilmsAction,
  fetchSimilarFilmsAction,
  fetchFavoriteFilmsAction,
  fetchPromoFilmAction,
  postCommentAction,
  fetchFilmCommentsAction,
  changeFilmStatusAction,
} from '../api-actions';

const initialState: SiteProcess = {
  activeGenre: Genre.AllGenres,
  film: null,
  films: [],
  promoFilm: null,
  filtredByGenreFilmList: [],
  filmsCount: FILMS_COUNT,
  isFilmsDataLoading: false,
  reviews: [],
  similarFilms: [],
  favoriteFilmsList: [],
  isFavoriteStatusChanged: false,
};

export const siteProcess = createSlice({
  name: NameSpace.Site,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filtredByGenreFilmList = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmCommentsAction.pending, (state) => {
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilmsList = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(postCommentAction.fulfilled, (state) => {
        state.isFilmsDataLoading = false;
      })
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
      .addCase(changeFilmStatusAction.pending, (state) => {
        state.isFavoriteStatusChanged = false;
      })
      .addCase(changeFilmStatusAction.fulfilled, (state) => {
        state.isFavoriteStatusChanged = true;
      });
  },
});
