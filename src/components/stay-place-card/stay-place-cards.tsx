import { Offer } from '../../types/offer.ts';
import StayPlaceCard from './stay-place-card.tsx';
import StayPlaceFavoriteCard from './stay-place-favorite-card.tsx';

type StayPlaceCardsProps = {
  offers: Offer[];
  onOfferClick: (id: string) => void;
  isFavoritePage: boolean;
}

function StayPlaceCards({offers, onOfferClick, isFavoritePage}: StayPlaceCardsProps): JSX.Element {
  if (isFavoritePage) {
    return (
      <div className="favorites__places">
        {offers.map((offer) => <StayPlaceFavoriteCard key={offer.id} offer={offer} onOfferClick={onOfferClick}/>)}
      </div>
    );
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <StayPlaceCard key={offer.id} offer={offer} onOfferClick={onOfferClick}/>)}
    </div>
  );
}

export default StayPlaceCards;
