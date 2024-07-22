import withStayPlaceCard from '../../hocs/with-stay-place-card.tsx';
import { Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import StayPlaceCard from './stay-place-card.tsx';
import StayPlaceFavoriteCard from './stay-place-favorite-card.tsx';

const AllStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceCard);
const FavoritesStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceFavoriteCard);

type StayPlaceCardsProps = {
  offers: Offer[];
  currentOffer: Offer | undefined;
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  isFavoritePage: boolean;
}

function StayPlaceCards({offers, currentOffer, onOfferClick, onOfferHover, isFavoritePage}: StayPlaceCardsProps): JSX.Element {
  if (isFavoritePage) {
    return (
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesStayPlaceCardsWrapped key={offer.id} offer={offer} onOfferClick={onOfferClick}/>)}
      </div>
    );
  }
  return (
    <div
      className={currentOffer === undefined ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}
    >
      {currentOffer === undefined
        ? offers.map((offer) =>
          (
            <AllStayPlaceCardsWrapped
              key={offer.id}
              offer={offer}
              onOfferClick={onOfferClick}
              onOfferHover={onOfferHover}
            />
          ))
        : offers
          .filter((offer) => offer.id !== currentOffer.id)
          .map((offer) => (
            <AllStayPlaceCardsWrapped
              key={offer.id}
              offer={offer}
              onOfferClick={onOfferClick}
              onOfferHover={onOfferHover}
            />
          ))}
    </div>
  );
}

export default StayPlaceCards;
