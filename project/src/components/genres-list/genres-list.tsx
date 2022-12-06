import { Link } from 'react-router-dom';

import { Genre } from '../../const';

import { Films } from '../../types/films';

import { setActiveGenre, getFiltredByGenreFilmList, resetFilmsCount } from '../../store/action';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getActiveGenre } from '../../store/site-process/selectors';

type Props = {
  films: Films;
};

const GenresList = ({ films }: Props): JSX.Element => {
  const genres: typeof Genre[keyof typeof Genre][] = [
    Genre.AllGenres,
    ...new Set(films.map((film) => film.genre)),
  ];

  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getActiveGenre);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item  ${
            genre === activeGenre ? 'catalog__genres-item--active' : ''
          }`}
        >
          <Link
            to="#"
            className="catalog__genres-link"
            onClick={() => {
              dispatch(setActiveGenre(genre));
              dispatch(getFiltredByGenreFilmList());
              dispatch(resetFilmsCount());
            }}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
