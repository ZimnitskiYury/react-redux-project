/* eslint-disable import/no-absolute-path */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import {
  BrowserRouter, Route, Link, Switch,
} from 'react-router-dom';

import store from './store';

import Header from '/src/modules/header/components/Header/header';
import LandingPage from '/src/modules/landing-page/components/LandingPage/landingPage';
import Sidebar from '/src/modules/sidebar/components/Sidebar/sidebar';
import FavoritePage from '/src/modules/favorites-page/components/FavoritePage/favoritePage';

import '/src/common/styles/reset.css';
import styles from './app.css';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <>
        <Sidebar />
        <Header />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/favorites" component={FavoritePage} />
          </Switch>
        </div>
      </>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
