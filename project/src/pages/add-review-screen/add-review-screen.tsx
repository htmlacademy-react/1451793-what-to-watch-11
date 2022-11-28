import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { DefaultFormBg } from '../../const';
import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import UserBlock from '../../components/user-block/user-block';

import { Films } from '../../types/films';

type Props = {
  films: Films;
};

const AddReviewScreen = ({ films }: Props): JSX.Element => {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));

  return (
    <section
      className="film-card film-card--full"
      style={{ backgroundColor: currentFilm?.backgroundColor }}
    >
      <Helmet>
        <title>Что посмотреть. Добавить обзор</title>
      </Helmet>

      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isLogoLight />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {currentFilm?.name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">
                  Add review
                </a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={currentFilm?.posterImage}
            alt={`${currentFilm?.name || ''} poster`}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm backgroundColor={currentFilm?.backgroundColor || DefaultFormBg.Color} />
      </div>
    </section>
  );
};

export default AddReviewScreen;
