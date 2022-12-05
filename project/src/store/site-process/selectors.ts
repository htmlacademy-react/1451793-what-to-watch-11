import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/film';
import { Films } from '../../types/films';
import { Comments } from '../../types/comments';

export const getFilms = (state: State): Film[] => state[NameSpace.Site].films;
export const getFilm = (state: State): Film | null => state[NameSpace.Site].film;
export const getFilmComments = (state: State): Comments => state[NameSpace.Site].reviews;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Site].similarFilms;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.Site].promoFilm;
export const getFilmsDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Site].isFilmsDataLoading;
export const getGenre = (state: State): string => state[NameSpace.Site].activeGenre;
export const getFilmsCount = (state: State): number => state[NameSpace.Site].filmsCount;
export const getFiltredByGenreFilms = (state: State): Film[] =>
  state[NameSpace.Site].filtredByGenreFilmList;
export const getActiveGenre = (state: State) => state[NameSpace.Site].activeGenre;
