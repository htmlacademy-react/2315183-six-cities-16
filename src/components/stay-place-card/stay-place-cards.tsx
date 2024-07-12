import { Offer } from '../../types/offer.ts';
import StayPlaceCard from './stay-place-card.tsx';

type StayPlaceCardsProps = {
  offers: Offer[];
  onOfferClick: (id: string) => void;
}

function StayPlaceCards({offers, onOfferClick}: StayPlaceCardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <StayPlaceCard key={offer.id} offer={offer} onOfferClick={onOfferClick}/>)}
    </div>
  );
}

export default StayPlaceCards;
