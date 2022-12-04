import { store } from '../store';
import { AuthorizationStatus, Genre } from '../const';
import { Film } from './film';
import { Films } from './films';
import { Comments } from './comments';

export type UserProcess = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
};

export type SiteProcess = {
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

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
