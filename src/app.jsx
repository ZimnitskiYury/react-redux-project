import React from 'react';
import { render } from 'react-dom';
import Header from './components/headerComponents/Header';
import SearchBox from './components/search-box';

const Main = () => (
  <>
    <Header />
    <SearchBox />
  </>
);

render(<Main />, document.getElementById('root'));
