import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'Modules/layout/components/Header/header';
import LandingPage from 'Modules/landing-page/components/LandingPage/landingPage';
import Sidebar from 'Modules/layout/components/Sidebar/sidebar';
import FavoritePage from 'Modules/favorites-page/components/FavoritePage/favoritePage';
import BeerDetailsPage from 'Modules/beer-details-page/components/beerDetailsPage';

import store from 'State/store';

import 'Styles/reset.css';
import 'Styles/sliders.css';
import styles from './app.css';


function App() {
  const [
    isOpen,
    toggleSidebar,
  ] = useState(false);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <>
          <Sidebar isOpen={isOpen} />
          <Header sidebarHandler={() => toggleSidebar((state) => !state)} />
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
            </Switch>
          </div>
        </>
      </Provider>
    </BrowserRouter>
  );
}

render(
  <App />,
  document.getElementById('root'),
);
