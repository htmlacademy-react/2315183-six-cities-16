import { ChangeEvent, useState } from 'react';
import { STARS } from '../../const';

function CommentForm() {
  const [commentData, setCommentData] = useState({
    rating: 5,
    comment: 'Tell how was your stay, what you like and what can be improved'
  });

  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const {name, value} = evt.target;

    setCommentData({
      ...commentData,
      [name]: value
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS.map((star) => (
          <>
            <input className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio"
              onChange={inputChangeHandler}
            />
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>)
        )}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder={commentData.comment}
        onChange={inputChangeHandler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
