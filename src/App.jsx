import { useState } from 'react';
import './App.css';

import Header from './components/header/Header'
import SearchBarContainer from './components/search-bar/SearchBarContainer';
import BusinessList from './components/business/BusinessList';
// import businesses from './components/business/Businesses';
import searchRestaurants from './utils/yelpAPI';  


function App() {
  const [businesses, setBusinesses] = useState([]);
  // event handling
  const onSearch = async (t,l,sb) => {
    setBusinesses(await searchRestaurants(t,l,sb));
  }
  return (
    <div className='main-container'>
      <Header />
      <SearchBarContainer apiHandler={onSearch} />
      <BusinessList businessList={businesses} />
    </div>
  )
}

export default App;
