import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';

import { reviews } from '../../mocks/reviews';

import { Tab } from '../../const';

import { Film } from '../../types/film';

type Props = {
  films: Film[];
  favoriteFilmsCount: number;
};

const FilmScreen = ({ films, favoriteFilmsCount }: Props): JSX.Element => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<keyof typeof Tab>(Tab.Overview);

  const getCurrentFilm = () => {
    const currentFilm = films.find((film) => film.id === Number(params.id));

    if (currentFilm !== undefined) {
      return currentFilm;
    } else {
      throw new Error('Could not find the current film');
    }
  };

  const getCurrentFilmReviews = () => reviews;

  return (
    <>
      <Helmet>
        <title>Что посмотреть.</title>
      </Helmet>

      <section
        className="film-card film-card--full"
        style={{ backgroundColor: getCurrentFilm().backgroundColor }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={getCurrentFilm().backgroundImage} alt={getCurrentFilm().name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLogoLight={false} />

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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{getCurrentFilm().name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{getCurrentFilm().genre}</span>
                <span className="film-card__year">{getCurrentFilm().released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsCount}</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={getCurrentFilm().posterImage}
                alt={`${getCurrentFilm().name || ''} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
              {activeTab === Tab.Overview && <Overview film={getCurrentFilm()} />}
              {activeTab === Tab.Details && <Details film={getCurrentFilm()} />}
              {activeTab === Tab.Reviews && <Reviews reviews={getCurrentFilmReviews()} />}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Fantastic Beasts: The Crimes of Grindelwald
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/bohemian-rhapsody.jpg"
                  alt="Bohemian Rhapsody"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Bohemian Rhapsody
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Macbeth
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                  Aviator
                </a>
              </h3>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FilmScreen;
