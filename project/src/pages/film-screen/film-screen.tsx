import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';

import { reviews } from '../../mocks/reviews';

import { similarFilms } from '../../mocks/similar-films';

import { Tab } from '../../const';

import { Films } from '../../types/films';

type Props = {
  films: Films;
  favoriteFilmsCount: number;
};

const getFilmById = (films: Films, filmId: number) => {
  const filmById = films.find((film) => film.id === filmId);

  if (filmById !== undefined) {
    return filmById;
  } else {
    throw new Error(`Could not find the film with id ${filmId}`);
  }
};

const FilmScreen = ({ films, favoriteFilmsCount }: Props): JSX.Element => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<keyof typeof Tab>(Tab.Overview);

  const film = getFilmById(films, Number(params.id));

  const getCurrentFilmReviews = () => reviews;

  return (
    <>
      <Helmet>
        <title>Что посмотреть.</title>
      </Helmet>

      <section
        className="film-card film-card--full"
        style={{ backgroundColor: film.backgroundColor }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLogoLight={false} />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
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
                src={film.posterImage}
                alt={`${film.name || ''} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
              {activeTab === Tab.Overview && <Overview film={film} />}
              {activeTab === Tab.Details && <Details film={film} />}
              {activeTab === Tab.Reviews && <Reviews reviews={getCurrentFilmReviews()} />}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FilmScreen;
