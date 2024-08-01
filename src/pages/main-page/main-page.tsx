import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo.tsx';
import StayPlaceCards from '../../components/stay-place-card/stay-place-cards.tsx';
import { City, Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { AppRoute, AuthorizationStatus, OffersClassNames } from '../../const.ts';
import { store } from '../../store/index.ts';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import { changeCity, resetSort } from '../../store/action.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { Link, useNavigate } from 'react-router-dom';
import SortOptions from '../../components/sort-options/sort-options.tsx';
import Loader from '../../components/loader/loader.tsx';
import StayPlaceCardsEmpty from '../../components/stay-place-card/stay-place-cards-empty.tsx';

type MainPageProps = {
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  selectedOffer: Offer | undefined;
}

function MainPage({onOfferClick, onOfferHover, selectedOffer}: MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  const currentCity = store.getState().city;
  const offersInCity = store.getState().offers.filter((offer) => offer.city.name === currentCity.name);

  const favoriteOffers = store.getState().offers.filter((offer) => offer.isFavorite === true);

  const userData = store.getState().user;

  const citiesListClickHandler = (city: City) => {
    dispatch(changeCity(city));
    dispatch(resetSort());
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
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ? (
                      <>
                        <li className="header__nav-item user">
                          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                            </div>
                            <span className="header__user-name user__name">{userData?.email}</span>
                            <span className="header__favorite-count">{favoriteOffers.length}</span>
                          </Link>
                        </li>
                        <li className="header__nav-item">
                          <Link className="header__nav-link" to={AppRoute.Login}>
                            <span className="header__signout">Sign out</span>
                          </Link>
                        </li>
                      </>
                    )
                    : (
                      <li className="header__nav-item">
                        <Link className="header__nav-link" to={AppRoute.Login}>
                          <span className="header__signout">Sign in</span>
                        </Link>
                      </li>
                    )
                }
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
          {
            offersInCity.length === 0
              ? <StayPlaceCardsEmpty currentCity={currentCity}/>
              : (
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{offersInCity.length} places to stay in {currentCity.name}</b>
                    {
                      isOffersDataLoading
                        ? <Loader />
                        :
                        <>
                          <SortOptions />
                          <StayPlaceCards
                            offers={offersInCity}
                            className={OffersClassNames.DEFAULT}
                            onOfferClick={onOfferClick}
                            onOfferHover={onOfferHover}
                          />
                        </>
                    }
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
              )
          }

        </div>
      </main>
    </div>
  );
}

export default MainPage;
