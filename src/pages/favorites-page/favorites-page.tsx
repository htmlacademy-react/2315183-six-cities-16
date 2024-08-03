import { Helmet } from 'react-helmet-async';
import { Offer, OfferClick, OfferHover } from '../../types/offer.ts';
import StayPlaceCards from '../../components/stay-place-card/stay-place-cards.tsx';
import Header from '../../components/header/header.tsx';

type FavoritesPageProps = {
  offers: Offer[];
  onOfferClick: OfferClick;
  onOfferHover: OfferHover;
}

function FavoritesPage({offers, onOfferClick, onOfferHover}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <StayPlaceCards
                  offers={favoriteOffers}
                  onOfferClick={onOfferClick}
                  onOfferHover={onOfferHover}
                  isFavoritePage
                />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
