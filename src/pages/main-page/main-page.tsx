import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo.tsx';
import StayPlaceCards from '../../components/stay-place-card/stay-place-cards.tsx';
import { City, Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { AppRoute, OffersClassNames } from '../../const.ts';
import { store } from '../../store/index.ts';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import { changeCity } from '../../store/action.ts';
import { useAppDispatch } from '../../hooks/index.ts';
import { useNavigate } from 'react-router-dom';
import SortOptions from '../../components/sort-options/sort-options.tsx';

type MainPageProps = {
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  selectedOffer: Offer | undefined;
}

function MainPage({onOfferClick, onOfferHover, selectedOffer}: MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentCity = store.getState().city;
  const offersInCity = store.getState().offers.filter((offer) => offer.city.name === currentCity.name);

  const citiesListClickHandler = (city: City) => {
    dispatch(changeCity(city));
    navigate(AppRoute.Root);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              onCityClick={citiesListClickHandler}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersInCity.length} places to stay in {currentCity.name}</b>
              <SortOptions />
              <StayPlaceCards
                offers={offersInCity}
                className={OffersClassNames.DEFAULT}
                onOfferClick={onOfferClick}
                onOfferHover={onOfferHover}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={currentCity}
                  points={offersInCity}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
