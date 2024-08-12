import { ChangeEvent, Fragment, memo, useEffect, useState } from 'react';
import { AppRoute, StarTitles } from '../../const';
import { CommentToSend } from '../../types/comments';
import { useAppSelector } from '../../hooks';
import { getCurrentOffer } from '../../store/offer-data/selectors';

type CommentFormProps = {
  onFormSubmit: (commentData: CommentToSend) => Promise<void>;
}

function CommentForm({onFormSubmit}: CommentFormProps) {
  const currentOffer = useAppSelector(getCurrentOffer);
  const [formData, setFormData] = useState({
    id: currentOffer?.id,
    rating: 0,
    comment: 'Tell how was your stay, what you like and what can be improved'
  } as CommentToSend);

  useEffect(() => {
    const clearInputs = () => {
      setFormData({
        ...formData,
        rating: 0,
        comment: ''
      });
    };

    clearInputs();
  }, []);

  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    if (currentOffer) {
      setFormData({
        ...formData,
        comment: value
      });
    }
  };

  const inputStarsCountChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    if (currentOffer) {
      setFormData({
        ...formData,
        rating: value
      });
    }
  };

  return (
    <form className="reviews__form form" method="post" action={`${AppRoute.Offer}/${currentOffer?.id}`}
      onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit(formData);
        setFormData({
          ...formData,
          rating: 0,
          comment: ''
        });
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(StarTitles).map((star) => (
          <Fragment key={star[0]}>
            <input className="form__rating-input visually-hidden" name="rating" value={star[0]} id={`${star[0]}-stars`} type="radio"
              onChange={inputStarsCountChangeHandler} checked={formData.rating === Number(star[0])}
            />
            <label htmlFor={`${star[0]}-stars`} className="reviews__rating-label form__rating-label" title={star[1]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>)
        ).reverse()}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={textareaChangeHandler}
        value={formData.comment}
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

export default memo(CommentForm);
