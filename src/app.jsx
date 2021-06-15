import React from 'react';
import { render } from 'react-dom';
import Header from './components/headerComponents/Header';
import MainPage from './components/mainPageComponents/MainPage';

const App = () => (
  <>
    <Header />
    <MainPage />
  </>
);

render(<App />, document.getElementById('root'));
