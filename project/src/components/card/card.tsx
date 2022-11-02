import { AppRoute } from '../../const';

import { Link } from 'react-router-dom';

import { Film } from '../../types/film';

type Props = {
  film: Film;
};

const Card = ({ film }: Props): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={film.previewImage} alt={film.name} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <Link to={`${AppRoute.Films}/${film.id}`} className="small-film-card__link">
        {film.name}
      </Link>
    </h3>
  </article>
);

export default Card;
