import Card from '../../components/card/card';

import { Film } from '../../types/film';

type Props = {
  films: Film[];
};

const FilmsList = ({ films }: Props): JSX.Element => (
  <div className="catalog__films-list">
    {films.map((film) => (
      <Card key={film.id} film={film} />
    ))}
  </div>
);

export default FilmsList;
