import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Genre } from '../../const';

import { Film } from '../../types/film';

import { setActiveGenre, getFiltredByGenreFilmList } from '../../store/action';
import { useAppSelector } from '../../hooks/useAppSelector';

type Props = {
  films: Film[];
};

const GenresList = ({ films }: Props): JSX.Element => {
  const genres: typeof Genre[keyof typeof Genre][] = [
    Genre.AllGenres,
    ...new Set(films.map((film) => film.genre)),
  ];

  const dispatch = useDispatch();
  const { activeGenre } = useAppSelector((state) => state);

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
