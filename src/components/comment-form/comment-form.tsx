import { ChangeEvent, FormEvent, useState } from 'react';
import { AppRoute, STARS } from '../../const';
import { store } from '../../store';
import { postCommentAction } from '../../store/api-actions';
import { Comment } from '../../types/comments';
import { useNavigate } from 'react-router-dom';

function CommentForm() {
  const [commentData, setCommentData] = useState({
    rating: 5,
    comment: 'Tell how was your stay, what you like and what can be improved'
  } as Comment);

  const navigate = useNavigate();

  const currentOffer = store.getState().currentOffer;

  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const {name} = evt.target;
    if (name === 'comment') {
      const {value} = evt.target;
      if (currentOffer) {
        setCommentData({
          ...commentData,
          id: currentOffer.id,
          [name]: value
        });
      }
    }
    if (name === 'rating') {
      const value = Number(evt.target.value);
      if (currentOffer) {
        setCommentData({
          ...commentData,
          id: currentOffer.id,
          [name]: value
        });
      }
    }
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    store.dispatch(postCommentAction(commentData));
    navigate(`${AppRoute.Offer}${currentOffer?.id}`);
  };

  return (
    <form className="reviews__form form" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS.map((star) => (
          <div key={star}>
            <input className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio"
              onChange={inputChangeHandler}
            />
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>)
        ).reverse()}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review" name="comment"
        placeholder={commentData.comment}
        onChange={inputChangeHandler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
