import { ChangeEvent, useState } from 'react';
import { AppRoute } from '../../const';
import { store } from '../../store';
import { postCommentAction } from '../../store/api-actions';
import { Comment } from '../../types/comments';

type CommentFormProps = {
  onFormSubmit: () => void;
}

function CommentForm({onFormSubmit}: CommentFormProps) {
  const [commentData, setCommentData] = useState({
    rating: 5,
    comment: 'Tell how was your stay, what you like and what can be improved'
  } as Comment);

  const currentOffer = store.getState().currentOffer;

  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    if (currentOffer) {
      setCommentData({
        ...commentData,
        id: currentOffer.id,
        [name]: value
      });
    }
  };

  const inputStarsCountChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name} = evt.target;
    const value = Number(evt.target.value);
    if (currentOffer) {
      setCommentData({
        ...commentData,
        id: currentOffer.id,
        [name]: value
      });
    }
  };

  return (
    <form className="reviews__form form" method="post" action={`${AppRoute.Offer}/${currentOffer?.id}`}
      onSubmit={(evt) => {
        evt.preventDefault();
        store.dispatch(postCommentAction(commentData));
        onFormSubmit();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={inputStarsCountChangeHandler}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={inputStarsCountChangeHandler}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={inputStarsCountChangeHandler}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={inputStarsCountChangeHandler}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={inputStarsCountChangeHandler}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review" name="comment"
        placeholder={commentData.comment}
        onChange={textareaChangeHandler}
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
