import { Cities } from '../../const';
import { City } from '../../types/offer';
import CitiesItem from '../cities-item/cities-item';

type CitiesListProps = {
  onCityClick: (city: City) => void;
}

function CitiesList({onCityClick}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list" data-testid="citiesList">
      {Object.values(Cities)
        .map((city) => (
          <CitiesItem city={city} onCityClick={onCityClick} key={city.name}/>
        ))}
    </ul>
  );
}

export default CitiesList;
