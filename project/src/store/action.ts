import { createAction } from '@reduxjs/toolkit';

import { Genre } from '../const';

const genreChange = createAction('genreChange', (value: typeof Genre[keyof typeof Genre]) => ({
  payload: value,
}));

const setFilmList = createAction('setFilmList');

export { genreChange, setFilmList };
