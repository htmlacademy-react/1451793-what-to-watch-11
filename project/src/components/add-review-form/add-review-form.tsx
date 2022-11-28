import { useState, ChangeEvent, Fragment, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DefaultFormBg, CommentLength, AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { postCommentAction } from '../../store/api-actions';

type Props = {
  backgroundColor: string;
  filmId: string;
};

const AddReviewForm = ({ backgroundColor, filmId }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
  });

  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value;
    setFormData({ ...formData, comment: value });
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setFormData({ ...formData, rating: value });
  };

  const onSubmit = async () => {
    await dispatch(
      postCommentAction({ comment: formData.comment, rating: Number(formData.rating), filmId }),
    );
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsSubmitting(true);

    onSubmit().then(() => {
      setIsSubmitting(false);
      navigate(`${AppRoute.Films}/${filmId}`);
    });
  };

  const ratingValues = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  useEffect(() => {
    const isValidFormData = () =>
      formData.comment.length > CommentLength.Min &&
      formData.comment.length < CommentLength.Max &&
      formData.rating !== '';

    if (isValidFormData()) {
      setIsSubmitBtnDisabled(false);
    } else {
      setIsSubmitBtnDisabled(true);
    }
  }, [formData.rating, formData.comment]);

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingValues.map((value) => (
            <Fragment key={value}>
              <input
                onChange={handleRatingChange}
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                disabled={isSubmitting}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>
                {`Rating ${value}`}
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      <div
        className="add-review__text"
        style={{ backgroundColor: backgroundColor, filter: DefaultFormBg.Filter }}
      >
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleCommentChange}
          disabled={isSubmitting}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isSubmitBtnDisabled || isSubmitting}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddReviewForm;
