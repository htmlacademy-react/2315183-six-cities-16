import withStayPlaceCard from '../../hocs/with-stay-place-card.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { getOffers } from '../../store/offer-data/selectors.ts';
import { OfferClick, OfferHover } from '../../types/offer.ts';
import StayPlaceCardItem from './stay-place-card-item.tsx';
import StayPlaceFavoriteCardItem from './stay-place-favorite-card-item.tsx';
import { getCurrentCity } from '../../store/city-process/selectors.ts';

const AllStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceCardItem);
const FavoritesStayPlaceCardsWrapped = withStayPlaceCard(StayPlaceFavoriteCardItem);

type StayPlaceCardListProps = {
  className?: string;
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  isFavoritePage?: boolean;
}

function StayPlaceCardList({className, onOfferClick, onOfferHover, isFavoritePage}: StayPlaceCardListProps): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers).filter((offer) => offer.city.name === currentCity.name);

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
