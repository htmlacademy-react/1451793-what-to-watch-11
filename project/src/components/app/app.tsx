import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRoute from '../history-route/history-route';
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
import {
  getFilms,
  getFilmsDataLoadingStatus,
  getFilmComments,
} from '../../store/site-process/selectors';

const App = (): JSX.Element => {
  const films = useAppSelector(getFilms);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const reviews = useAppSelector(getFilmComments);

  if (isFilmsDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRoute history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<MainScreen films={films} />} />
          <Route path={AppRoute.SignIn} element={<SignInScreen />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<FilmScreen reviews={reviews} />} />
          <Route path={AppRoute.AddReview} element={<AddReviewScreen films={films} />} />
          <Route path={AppRoute.Player} element={<PlayerScreen films={films} />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </HistoryRoute>
    </HelmetProvider>
  );
};

export default App;
