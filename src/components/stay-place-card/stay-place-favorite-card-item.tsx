import { useState } from 'react';
import { Offer, OfferClick } from '../../types/offer.ts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { updateOfferFavoriteStatusAction } from '../../store/api-actions.ts';
import { setError } from '../../store/errors-process/errors-process.ts';
import { store } from '../../store/index.ts';

type StayPlaceFavoriteCardItemProps = {
  offer: Offer;
  onOfferClick: OfferClick;
}

function StayPlaceFavoriteCardItem({offer, onOfferClick}: StayPlaceFavoriteCardItemProps): JSX.Element {
  const {id, title, type, price, previewImage, isFavorite, isPremium} = offer;
  const [currentOffer, setCurrentOffer] = useState<Offer>({} as Offer);
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(isFavorite);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const toggleFavoriteStatusHandler = () => {
    try {
      setIsUpdating(true);
      store.dispatch(updateOfferFavoriteStatusAction({id: offer.id, favoriteStatus}));
      setFavoriteStatus(!favoriteStatus);
    } catch (err) {
      setError('Cant update status');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <article className="favorites__card place-card"
      data-testid="stayPlaceFavoriteCardItem"
      id={`offer-${id}`}
      onClick={() => {
        setCurrentOffer({
          ...currentOffer,
          id: id
        });
        onOfferClick(currentOffer);
      }}
    >
      { isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : '' }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button
            ${favoriteStatus ?
      'place-card__bookmark-button--active'
      : ''}`} type="button"
          disabled={isUpdating}
          onClick={toggleFavoriteStatusHandler}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{favoriteStatus ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
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

export default StayPlaceFavoriteCardItem;
