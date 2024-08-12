import { Helmet } from 'react-helmet-async';
import StayPlaceCardList from '../../components/stay-place-card/stay-place-card-list.tsx';
import { City, Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { AppRoute, OffersClassNames } from '../../const.ts';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { useNavigate } from 'react-router-dom';
import SortOptions from '../../components/sort-options/sort-options.tsx';
import Loader from '../../components/loader/loader.tsx';
import StayPlaceCardEmptyList from '../../components/stay-place-card/stay-place-card-empty-list.tsx';
import Header from '../../components/header/header.tsx';
import { getOffers, getOffersDataLoadingStatus } from '../../store/offer-data/selectors.ts';
import { getCurrentCity } from '../../store/city-process/selectors.ts';
import { changeCity } from '../../store/city-process/city-process.ts';
import { closeSorts } from '../../store/sort-process/sort-process.ts';
import { resetSort } from '../../store/offer-data/offer-data.ts';

type MainPageProps = {
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
  selectedOffer: Offer | undefined;
}

function MainPage({onOfferClick, onOfferHover, selectedOffer}: MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  const currentCity = useAppSelector(getCurrentCity);
  const offersInCity = useAppSelector(getOffers).filter((offer) => offer.city.name === currentCity.name);

  const citiesListClickHandler = (changedCity: City) => {
    dispatch(changeCity(changedCity));
    dispatch(resetSort());
    dispatch(closeSorts());
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
              ? <StayPlaceCardEmptyList currentCity={currentCity}/>
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
                          <StayPlaceCardList
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
