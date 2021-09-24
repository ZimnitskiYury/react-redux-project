import React, { useReducer } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'modules/layout/components/Header/header';
import LandingPage from 'modules/landing-page/components/LandingPage/landingPage';
import Sidebar from 'modules/layout/components/Sidebar/sidebar';
import FavoritePage from 'modules/favorites-page/components/FavoritePage/favoritePage';
import BeerDetailsPage from 'modules/beer-details-page/components/BeerDetailsPage/beerDetailsPage';
import ProfilePage from 'modules/profile-page/components/ProfilePage/profilePage';

import store from 'state/store';

import 'styles/fonts.css';
import 'styles/reset.css';
import 'styles/sliders.css';
import styles from './app.css';


function App() {
  const [
    isOpen,
    toggleSidebar,
  ] = useReducer(
    (state) => !state,
    false,
  );

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Sidebar isOpen={isOpen} />
        <Header sidebarHandler={toggleSidebar} />
        <div className={styles.container}>
          <Switch>
            <Route
              exact
              path="/"
              component={LandingPage}
            />
            <Route
              path="/favorites"
              component={FavoritePage}
            />
            <Route
              path="/beer/:id"
              component={BeerDetailsPage}
            />
            <Route
              path="/profile"
              component={ProfilePage}
            />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

render(
  <App />,
  document.getElementById('root'),
);
