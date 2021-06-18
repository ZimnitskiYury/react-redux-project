/* eslint-disable import/no-absolute-path */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from '/src/modules/header/components/Header/header';
import LandingPage from '/src/modules/landing-page/components/LandingPage/landingPage';
import Sidebar from '/src/modules/sidebar/components/Sidebar/sidebar';
import store from './store';

import '/src/common/styles/reset.css';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <>
        <Sidebar />
        <Header />
        <Route exact path="/" component={LandingPage} />
      </>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
