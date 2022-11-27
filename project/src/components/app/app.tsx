import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import { AppRoute, AuthorizationStatus } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

import PrivateRoute from '../private-route/private-route';

import { useAppSelector } from '../../hooks/useAppSelector';

const App = (): JSX.Element => {
  const { films, promoFilm, isFilmsDataLoading } = useAppSelector((state) => state);
  const favoriteFilms = films.filter((film) => film.isFavorite);

  if (isFilmsDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen
                promoFilm={promoFilm}
                films={films}
                favoriteFilmsCount={favoriteFilms.length}
              />
            }
          />
          <Route path={AppRoute.SignIn} element={<SignInScreen />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyListScreen favoriteFilms={favoriteFilms} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmScreen films={films} favoriteFilmsCount={favoriteFilms.length} />}
          />
          <Route path={AppRoute.AddReview} element={<AddReviewScreen films={films} />} />
          <Route path={AppRoute.Player} element={<PlayerScreen films={films} />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};

export default App;
