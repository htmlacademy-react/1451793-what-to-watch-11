import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { TextRating } from './const';

dayjs.extend(duration);

const formatMinutesToTime = (minutes: number): string =>
  dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');

type TextRatingType = typeof TextRating[keyof typeof TextRating];

const getTextRating = (rating: number | null): TextRatingType => {
  if (rating && rating < 0) {
    throw new Error('Rating must be positive');
  } else if (rating && rating < 3) {
    return TextRating.Bad;
  } else if (rating && rating < 5) {
    return TextRating.Normal;
  } else if (rating && rating < 8) {
    return TextRating.Good;
  } else if (rating && rating < 10) {
    return TextRating.VeryGood;
  } else {
    return TextRating.Awesome;
  }
};

export { formatMinutesToTime, getTextRating };
