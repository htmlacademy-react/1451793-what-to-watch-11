import { getTextRating } from '../../utils';

import { Film } from '../../types/film';

type Props = {
  film: Film | null;
};

const Overview = ({ film }: Props): JSX.Element => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{film?.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{film && getTextRating(film?.rating)}</span>
        <span className="film-rating__count">240 ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{film?.description}</p>

      <p className="film-card__director">
        <strong>Director: {film?.director}</strong>
      </p>

      <p className="film-card__starring">
        <strong>Starring: {film?.starring}</strong>
      </p>
    </div>
  </>
);

export default Overview;
