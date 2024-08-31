import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index.ts';
import { getCurrentCity } from '../../store/city-process/selectors.ts';
import { City } from '../../types/offer.ts';

type CitiesItemProps = {
  city: City;
  onCityClick: (city: City) => void;
}

function CitiesItem({city, onCityClick}: CitiesItemProps): JSX.Element {
  const cityName = useAppSelector(getCurrentCity);
  return (
    <li className="locations__item" key={city.name} onClick={() => {
      onCityClick(city);
    }}
    data-testid='citiesItem'
    >
      <Link className={`locations__item-link tabs__item ${cityName.name === city.name ? 'tabs__item--active' : ''}`} to="">
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

export default CitiesItem;
