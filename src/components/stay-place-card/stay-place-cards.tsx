import { Offer } from '../../types/offer.ts';
import StayPlaceCard from './stay-place-card.tsx';

type StayPlaceCardsProps = {
  offers: Offer[];
}

function StayPlaceCards({offers}: StayPlaceCardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <StayPlaceCard key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default StayPlaceCards;
