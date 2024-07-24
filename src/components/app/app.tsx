import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page.tsx';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offer.ts';
import { useState } from 'react';

type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps): JSX.Element {
  const [currentOffer, setCurrentOffer] = useState<Offer>({} as Offer);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const offerClickHandler = (id: string) => {
    setCurrentOffer({
      ...currentOffer,
      id: id
    });
  };

  const offerHoverHandler = (offerElement: Offer) => {
    const currentPoint = offers.find((offer) =>
      offer.title === offerElement.title,
    );
    setSelectedOffer(currentPoint);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage
                offers={offers}
                onOfferClick={offerClickHandler}
                onOfferHover={offerHoverHandler}
                selectedOffer={selectedOffer}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage
                  offers={offers}
                  onOfferClick={offerClickHandler}
                  onOfferHover={offerHoverHandler}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
          >
            <Route
              path={AppRoute.OfferId}
              element={
                <OfferPage
                  offers={offers}
                  onOfferClick={offerClickHandler}
                  onOfferHover={offerHoverHandler}
                  selectedOffer={selectedOffer}
                />
              }
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
