import withStayPlaceCard from '../../hocs/with-stay-place-card.tsx';
import { Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import StayPlaceCardItem from './stay-place-card-item.tsx';
import StayPlaceFavoriteCardItem from './stay-place-favorite-card-item.tsx';

const AllStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceCardItem);
const FavoritesStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceFavoriteCardItem);

type StayPlaceCardListProps = {
  offers: Offer[];
  className?: string;
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  isFavoritePage?: boolean;
}

function StayPlaceCardList({offers, className, onOfferClick, onOfferHover, isFavoritePage}: StayPlaceCardListProps): JSX.Element {
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

export default StayPlaceCardList;
