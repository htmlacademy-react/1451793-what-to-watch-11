import { useState } from 'react';

import Card from '../../components/card/card';

import { Film } from '../../types/film';

type Props = {
  films: Film[];
};

const FilmsList = ({ films }: Props): JSX.Element => {
  const [, setCurrentFilmId] = useState<number | null>(null);

  const handleMouseOver = (id: number) => {
    setCurrentFilmId(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card key={film.id} film={film} onMouseOver={handleMouseOver} />
      ))}
    </div>
  );
};

export default FilmsList;
