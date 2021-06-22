import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'Layout/header/components/Header/header';
import LandingPage from 'Modules/landing-page/components/LandingPage/landingPage';
import Sidebar from 'Layout/sidebar/components/Sidebar/sidebar';
import FavoritePage from 'Modules/favorites-page/components/FavoritePage/favoritePage';

import store from 'State/store';

import 'Styles/reset.css';
import 'Styles/sliders.css';
import styles from './app.css';


function App() {
  return (
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
}

render(<App />, document.getElementById('root'));
