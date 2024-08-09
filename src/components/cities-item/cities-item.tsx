import { useAppSelector } from '../../hooks/index.ts';
import { City } from '../../types/offer.ts';

type CitiesItemProps = {
  city: City;
  onCityClick: (city: City) => void;
}

function CitiesItem({city, onCityClick}: CitiesItemProps): JSX.Element {
  const cityName = useAppSelector((state) => state.city.name);
  return (
    <li className="locations__item" key={city.name} onClick={() => {
      onCityClick(city);
    }}
    >
      <a className={`locations__item-link tabs__item ${cityName === city.name ? 'tabs__item--active' : ''}`} href="#">
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
