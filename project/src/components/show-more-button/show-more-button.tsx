import { useDispatch } from 'react-redux';

import { increaseFilmsCount } from '../../store/action';

const ShowMoreButton = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(increaseFilmsCount())}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreButton;
