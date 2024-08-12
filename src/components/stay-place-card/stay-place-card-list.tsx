import withStayPlaceCard from '../../hocs/with-stay-place-card.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { getOffers } from '../../store/offer-data/selectors.ts';
import { Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import StayPlaceCardItem from './stay-place-card-item.tsx';
import StayPlaceFavoriteCardItem from './stay-place-favorite-card-item.tsx';
import { getCurrentCity } from '../../store/city-process/selectors.ts';

const AllStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceCardItem);
const FavoritesStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceFavoriteCardItem);

type StayPlaceCardListProps = {
  favoriteOffers?: Offer[];
  className?: string;
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  isFavoritePage?: boolean;
}

function StayPlaceCardList({favoriteOffers, className, onOfferClick, onOfferHover, isFavoritePage}: StayPlaceCardListProps): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers).filter((offer) => offer.city.name === currentCity.name);

  if (isFavoritePage && favoriteOffers) {
    return (
      <div className="favorites__places">
        {favoriteOffers.map((offer) => <FavoritesStayPlaceCardsWrapped key={offer.id + offer.title} offer={offer} onOfferClick={onOfferClick}/>)}
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
