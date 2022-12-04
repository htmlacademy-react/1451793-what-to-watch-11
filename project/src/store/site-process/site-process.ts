import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FILMS_COUNT, Genre } from '../../const';
import { SiteProcess } from '../../types/state';

import {
  fetchFilmAction,
  fetchFilmsAction,
  fetchSimilarFilmsAction,
  fetchPromoFilmAction,
  postCommentAction,
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
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isFilmsDataLoading = true;
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
      });
  },
});
