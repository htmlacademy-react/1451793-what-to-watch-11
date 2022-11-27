import { useState } from 'react';

import Card from '../../components/card/card';

import { Films } from '../../types/films';

type Props = {
  films: Films;
};

const FilmsList = ({ films }: Props): JSX.Element => {
  const [currentFilmId, setCurrentFilmId] = useState<number | null>(null);

  const handleMouseOver = (id: number) => {
    setCurrentFilmId(id);
  };

  const handleMouseOut = () => {
    setCurrentFilmId(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card
          key={film.id}
          film={film}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          isPlaying={film.id === currentFilmId}
        />
      ))}
    </div>
  );
};

export default FilmsList;
