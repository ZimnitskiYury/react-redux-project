import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/headerComponents/Header';
import MainPage from './components/mainPageComponents/MainPage';
import store from './store';

const App = () => (
  <Provider store={store}>
    <>
      <Header />
      <MainPage />
    </>
  </Provider>
);

render(<App />, document.getElementById('root'));
