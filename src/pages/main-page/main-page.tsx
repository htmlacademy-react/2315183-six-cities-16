import { Helmet } from 'react-helmet-async';
import StayPlaceCards from '../../components/stay-place-card/stay-place-cards.tsx';
import { City, Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { AppRoute, OffersClassNames } from '../../const.ts';
import { store } from '../../store/index.ts';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import { changeCity, resetSort } from '../../store/action.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { useNavigate } from 'react-router-dom';
import SortOptions from '../../components/sort-options/sort-options.tsx';
import Loader from '../../components/loader/loader.tsx';
import StayPlaceCardsEmpty from '../../components/stay-place-card/stay-place-cards-empty.tsx';
import Header from '../../components/header/header.tsx';

type MainPageProps = {
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  selectedOffer: Offer | undefined;
}

function MainPage({onOfferClick, onOfferHover, selectedOffer}: MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  const currentCity = store.getState().city;
  const offersInCity = store.getState().offers.filter((offer) => offer.city.name === currentCity.name);


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
      <Header />
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
