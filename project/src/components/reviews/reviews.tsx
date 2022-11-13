import Review from '../review/review';

import { Comment } from '../../types/comment';

type Props = {
  reviews: Comment[];
};

const Reviews = ({ reviews }: Props): JSX.Element => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {reviews
        .filter((_, index) => index % 2 !== 0)
        .map((comment) => (
          <Review review={comment} key={comment.id} />
        ))}
    </div>
    <div className="film-card__reviews-col">
      {reviews
        .filter((_, index) => index % 2 === 0)
        .map((comment) => (
          <Review review={comment} key={comment.id} />
        ))}
    </div>
  </div>
);

export default Reviews;
