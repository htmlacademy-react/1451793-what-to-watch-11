import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { TextRating } from './const';

dayjs.extend(duration);

const formatMinutesToTime = (minutes: number): string =>
  dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');

const formatSecondsToTime = (seconds: number): string => {
  const hour = 3600;
  if (seconds < hour) {
    return dayjs.duration(seconds, 'seconds').format('mm:ss');
  }
  return dayjs.duration(seconds, 'seconds').format('H:mm:ss');
};

type TextRatingType = typeof TextRating[keyof typeof TextRating];

const getTextRating = (rating: number): TextRatingType => {
  if (typeof rating === 'number') {
    if (rating < 0) {
      throw new Error('Rating must be positive');
    } else if (rating < 3) {
      return TextRating.Bad;
    } else if (rating < 5) {
      return TextRating.Normal;
    } else if (rating < 8) {
      return TextRating.Good;
    } else if (rating < 10) {
      return TextRating.VeryGood;
    } else {
      return TextRating.NoData;
    }
  }
  return TextRating.VeryGood;
};

export { formatMinutesToTime, getTextRating, formatSecondsToTime };
