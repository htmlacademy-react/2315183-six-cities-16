import { Cities } from '../../const';
import { store } from '../../store';

function CitiesList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {Object.values(Cities)
        .map((city) => (
          <li className="locations__item" key={city.name}>
            <a className={`locations__item-link tabs__item ${store.getState().city.name === city.name ? 'tabs__item--active' : ''}`} href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}

export default CitiesList;
