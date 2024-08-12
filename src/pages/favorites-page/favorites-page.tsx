import { Helmet } from 'react-helmet-async';
import { OfferClick, OfferHover } from '../../types/offer.ts';
import StayPlaceCardList from '../../components/stay-place-card/stay-place-card-list.tsx';
import Header from '../../components/header/header.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { Cities } from '../../const.ts';
import { store } from '../../store/index.ts';
import { fetchFavoriteOffersAction } from '../../store/api-actions.ts';
import { getFavoriteOffers, getOffersDataLoadingStatus } from '../../store/offer-data/selectors.ts';
import Loader from '../../components/loader/loader.tsx';
import FavoritesEmptyList from '../../components/favorites-empty-list/favorites-empty-list.tsx';

store.dispatch(fetchFavoriteOffersAction());

type FavoritesPageProps = {
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
}

function FavoritesPage({onOfferClick, onOfferHover}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  if (isOffersDataLoading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <Header />

      {
        favoriteOffers.length !== 0
          ? (
            <>
              <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                  <section className="favorites">
                    <h1 className="favorites__title">Saved listing</h1>
                    {favoriteOffers.length !== 0
                      ? (
                        <ul className="favorites__list">
                          {Object.values(Cities).map((city) => {
                            const favoriteOffersByCity = favoriteOffers.filter((offer) => offer.city.name === city.name);
                            if (favoriteOffersByCity.length) {
                              return (
                                <li className="favorites__locations-items" key={city.name}>
                                  <div className="favorites__locations locations locations--current">
                                    <div className="locations__item">
                                      <a className="locations__item-link" href="#">
                                        <span>{city.name}</span>
                                      </a>
                                    </div>
                                  </div>
                                  <StayPlaceCardList
                                    favoriteOffers={favoriteOffersByCity}
                                    onOfferClick={onOfferClick}
                                    onOfferHover={onOfferHover}
                                    isFavoritePage
                                  />
                                </li>
                              );
                            }
                          })}
                        </ul>
                      )
                      : ''}

                  </section>
                </div>
              </main>
              <footer className="footer container">
                <a className="footer__logo-link" href="main.html">
                  <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
                </a>
              </footer>
            </>
          )
          : <FavoritesEmptyList />
      }
    </div>
  );
}

export default FavoritesPage;
