import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import Header from 'src/layout/header/components/Header/header';

import LandingPage from 'Modules/landing-page/components/LandingPage/landingPage';
import Sidebar from 'Modules/sidebar/components/Sidebar/sidebar';
import FavoritePage from 'Modules/favorites-page/components/FavoritePage/favoritePage';
import store from '../state/store';

import 'Styles/reset.css';
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
