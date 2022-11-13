import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { DefaultFormBg } from '../../const';
import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review-form/add-review-form';

import { Film } from '../../types/film';

type Props = {
  films: Film[];
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
