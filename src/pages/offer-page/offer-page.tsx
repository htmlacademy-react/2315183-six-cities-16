import { Helmet } from 'react-helmet-async';
import { Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import { useParams } from 'react-router-dom';
import ReviewsList from '../../components/reviews/reviews-list.tsx';
import StayPlaceCards from '../../components/stay-place-card/stay-place-cards.tsx';
import Map from '../../components/map/map.tsx';
import { OffersClassNames, STARS } from '../../const.ts';
import { store } from '../../store/index.ts';
import { useAppSelector } from '../../hooks/index.ts';
import Loader from '../../components/loader/loader.tsx';
import Header from '../../components/header/header.tsx';
import { fetchCommentsAction, fetchCurrentOfferAction, fetchNearestOfferAction } from '../../store/api-actions.ts';
import { useEffect } from 'react';

type OfferPageProps = {
  selectedOffer: Offer | undefined;
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
}

function OfferPage({selectedOffer, onOfferClick, onOfferHover}: OfferPageProps): JSX.Element {
  const { id: currentId } = useParams();

  useEffect(() => {
    if (currentId) {
      store.dispatch(fetchCommentsAction(currentId));
      store.dispatch(fetchNearestOfferAction(currentId));
      store.dispatch(fetchCurrentOfferAction(currentId));
    }
  }, [currentId]);

  const currentCity = useAppSelector((state) => state.city);
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const nearestOffers = useAppSelector((state) => state.nearestOffers);

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return <Loader />;
  }

  if (currentOffer) {
    const {
      title,
      type,
      price,
      isFavorite,
      isPremium,
      rating,
      description,
      goods,
      host,
      maxAdults,
      bedrooms,
      images,
      id
    } = currentOffer;

    const starsPercent = rating * 100 / STARS.length;

    return (
      <div className="page">
        <Helmet>
          <title>6 cities. Offer</title>
        </Helmet>
        <Header />

        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {images.map((image) => (
                  <div className="offer__image-wrapper" key={id + image}>
                    <img className="offer__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {isPremium ?
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div> : ''}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {title}
                  </h1>
                  <button className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${starsPercent}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {goods.map((good) => (
                      <li className="offer__inside-item" key={id + good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="offer__user-name">
                      {host.name}
                    </span>
                    {host.isPro
                      ? (
                        <span className="offer__user-status">
                          Pro
                        </span>
                      )
                      : ''}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {description}
                    </p>
                  </div>
                </div>
                <ReviewsList />
              </div>
            </div>
            <section className="offer__map map">
              <Map
                city={currentCity}
                points={nearestOffers}
                selectedOffer={selectedOffer}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <StayPlaceCards
                offers={nearestOffers}
                className={OffersClassNames.NEAREST}
                onOfferClick={onOfferClick}
                onOfferHover={onOfferHover}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
  return (<div></div>);
}

export default OfferPage;
