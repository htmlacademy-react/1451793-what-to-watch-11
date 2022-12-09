import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getFavoriteFilms } from '../../store/site-process/selectors';
import { useEffect } from 'react';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';

const MyListScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const favoriteFilms = useAppSelector(getFavoriteFilms);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Helmet>
        <title>Что посмотреть. Мой список</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo isLogoLight={false} />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
};

export default MyListScreen;
