import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Header from './modules/header/components/Header/header';
import LandingPage from './modules/landing-page/components/LandingPage/landingPage';
import Sidebar from './modules/sidebar/components/Sidebar/sidebar';
import store from './store';

import '/src/common/styles/reset.css';

const App = () => (
  <Provider store={store}>
    <>
      <Sidebar />
      <Header />
      <LandingPage />
    </>
  </Provider>
);

render(<App />, document.getElementById('root'));
