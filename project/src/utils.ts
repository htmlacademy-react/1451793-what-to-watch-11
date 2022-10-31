import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const formatMinutesToTime = (minutes: number): string =>
  dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');

export { formatMinutesToTime };
