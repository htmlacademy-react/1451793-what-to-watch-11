import dayjs from 'dayjs';

import { Comment } from '../../types/comment';

type Props = {
  review: Comment;
};

const Review = ({
  review: {
    comment,
    date,
    rating,
    user: { id, name },
  },
}: Props): JSX.Element => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{name}</cite>
        <time className="review__date" dateTime={date}>
          {dayjs(date).format('MMMM DD, YYYY')}
        </time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>
);

export default Review;
