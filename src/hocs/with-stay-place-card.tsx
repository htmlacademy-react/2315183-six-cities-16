import { ComponentType } from 'react';
import StayPlaceCardItem from '../components/stay-place-card/stay-place-card-item';
import { Offer, OfferClick, OfferHover } from '../types/offer';

type HOCProps = {
  renderCard: (offer: Offer, onOfferClick: OfferClick, onOfferHover: OfferHover | undefined) => void;
}

function withStayPlaceCard<T>(Component: ComponentType<T>)
  : ComponentType<T> {
  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithStayPlaceCard(props: ComponentProps): JSX.Element {
    return (
      <Component
        {...props as T}
        renderCard={(offer: Offer, onOfferClick: OfferClick, onOfferHover: OfferHover) => (
          <StayPlaceCardItem
            offer={offer}
            onOfferClick={onOfferClick}
            onOfferHover={onOfferHover}
          />
        )}
      />
    );
  }

  return WithStayPlaceCard;
}

export default withStayPlaceCard;
