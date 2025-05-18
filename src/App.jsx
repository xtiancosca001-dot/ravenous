import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/header/Header'
import SearchBarContainer from './components/search-bar/SearchBarContainer';
import BusinessList from './components/business/BusinessList';
import businesses from './components/business/Businesses';


function App() {
  return (
    <div className='main-container'>
      <Header />
      <SearchBarContainer />
      <BusinessList businessList={businesses} />
    </div>
  )
}

export default App;
