import { MouseEvent, useState } from 'react';
import { Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

type StayPlaceCardProps = {
  offer: Offer;
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
}

function StayPlaceCard({offer, onOfferClick, onOfferHover}: StayPlaceCardProps): JSX.Element {
  const {id, title, type, price, previewImage, isFavorite, isPremium} = offer;
  const [currentOffer, setCurrentOffer] = useState<Offer>({} as Offer);

  const offerHoverHandler = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onOfferHover(evt.currentTarget.innerText);
  };

  return (
    <article className="cities__card place-card"
      id={`offer-${id}`}
      onClick={() => {
        setCurrentOffer({
          ...currentOffer,
          id: id
        });
        onOfferClick(currentOffer.id);
      }}
      onMouseEnter={offerHoverHandler}
    >
      { isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : '' }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button
            ${isFavorite ?
      'place-card__bookmark-button--active'
      : ''}`} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default StayPlaceCard;
