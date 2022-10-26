import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';

type AppProps = {
  filmsCount: number;
  promoName: string;
  promoGenre: string;
  promoReleaseYear: number;
};

function App({ filmsCount, promoName, promoGenre, promoReleaseYear }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen
              filmsCount={filmsCount}
              promoName={promoName}
              promoGenre={promoGenre}
              promoReleaseYear={promoReleaseYear}
            />
          }
        />
        <Route path={AppRoute.SignIn} element={<SignInScreen />} />
        <Route path={AppRoute.MyList} element={<MyListScreen />} />
        <Route path={AppRoute.Film} element={<FilmScreen />} />
        <Route path={AppRoute.AddReview} element={<AddReviewScreen />} />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
