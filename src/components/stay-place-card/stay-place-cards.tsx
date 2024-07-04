import StayPlaceCard from './stay-place-card.tsx';

type StayPlaceCardsProps = {
  countOfCards: number;
}

function StayPlaceCards({countOfCards}: StayPlaceCardsProps): JSX.Element {
  const stayPlaceCardsTemplate = Array.from({length: countOfCards}, (_, index) => <StayPlaceCard key={index} />);
  return <div className="cities__places-list places__list tabs__content">{stayPlaceCardsTemplate}</div>;
}

export default StayPlaceCards;
