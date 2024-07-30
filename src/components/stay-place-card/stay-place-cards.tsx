import withStayPlaceCard from '../../hocs/with-stay-place-card.tsx';
import { Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import StayPlaceCard from './stay-place-card.tsx';
import StayPlaceFavoriteCard from './stay-place-favorite-card.tsx';

const AllStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceCard);
const FavoritesStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceFavoriteCard);

type StayPlaceCardsProps = {
  offers: Offer[];
  className?: string;
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  isFavoritePage?: boolean;
}

function StayPlaceCards({offers, className, onOfferClick, onOfferHover, isFavoritePage}: StayPlaceCardsProps): JSX.Element {
  if (isFavoritePage) {
    return (
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesStayPlaceCardsWrapped key={offer.id + offer.title} offer={offer} onOfferClick={onOfferClick}/>)}
      </div>
    );
  }
  return (
    <div
      className={className}
    >
      {
        offers.map((offer) => (
          <AllStayPlaceCardsWrapped
            key={offer.id + offer.title}
            offer={offer}
            onOfferClick={onOfferClick}
            onOfferHover={onOfferHover}
          />
        ))
      }
    </div>
  );
}

export default StayPlaceCards;
