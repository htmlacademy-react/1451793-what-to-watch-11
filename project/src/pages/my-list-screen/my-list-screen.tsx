import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';

import { Films } from '../../types/films';

type Props = {
  favoriteFilms: Films;
};

const MyListScreen = ({ favoriteFilms }: Props): JSX.Element => (
  <div className="user-page">
    <Helmet>
      <title>Что посмотреть. Мой список</title>
    </Helmet>

    <header className="page-header user-page__head">
      <Logo isLogoLight={false} />

      <h1 className="page-title user-page__title">
        My list <span className="user-page__film-count">{favoriteFilms.length}</span>
      </h1>
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a href="/" className="user-block__link">
            Sign out
          </a>
        </li>
      </ul>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmsList films={favoriteFilms} />
    </section>

    <Footer />
  </div>
);

export default MyListScreen;
