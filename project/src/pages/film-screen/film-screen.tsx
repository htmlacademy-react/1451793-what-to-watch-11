import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';

import { Tab, SIMILAR_FILMS_COUNT, AuthorizationStatus, APIRoute, AppRoute } from '../../const';

import { Comments } from '../../types/comments';

import {
  fetchFilmCommentsAction,
  fetchSimilarFilmsAction,
  fetchFilmAction,
  changeFilmStatusAction,
  fetchFavoriteFilmsAction,
} from '../../store/api-actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {
  getFavoriteFilms,
  getFavoriteStatusChange,
  getFilm,
  getSimilarFilms,
} from '../../store/site-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { redirectToRoute } from '../../store/action';

type Props = {
  reviews: Comments;
};

const FilmScreen = ({ reviews }: Props): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<keyof typeof Tab>(Tab.Overview);

  const navigate = useNavigate();

  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteStatusChange = useAppSelector(getFavoriteStatusChange);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchFavoriteFilmsAction());
      dispatch(fetchFilmCommentsAction(params.id));
      dispatch(fetchSimilarFilmsAction(params.id));
      dispatch(fetchFilmAction(params.id));
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    if (favoriteStatusChange && params.id) {
      dispatch(fetchFavoriteFilmsAction());
      dispatch(fetchFilmAction(params.id));
    }
  }, [favoriteStatusChange, dispatch, params.id]);

  const handlePlayBtnClick = () => {
    if (!film) {
      return;
    }

    const path = `/player/${film.id}`;

    navigate(path);
  };

  if (!film) {
    return <NotFoundScreen />;
  }

  const handleAddFilmBtnClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    dispatch(changeFilmStatusAction({ filmId: film.id, status: Number(!film.isFavorite) }));
  };

  return (
    <>
      <Helmet>
        <title>Что посмотреть.</title>
      </Helmet>

      <section
        className="film-card film-card--full"
        style={{ backgroundColor: film?.backgroundColor }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLogoLight={false} />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={handlePlayBtnClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={handleAddFilmBtnClick}
                >
                  {!film.isFavorite ? (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                  )}
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link
                    to={`${APIRoute.Films}/${film?.id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film?.posterImage}
                alt={`${film?.name || ''} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
              {activeTab === Tab.Overview && <Overview film={film} />}
              {activeTab === Tab.Details && <Details film={film} />}
              {activeTab === Tab.Reviews && <Reviews reviews={reviews} />}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms.slice(0, SIMILAR_FILMS_COUNT)} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FilmScreen;
