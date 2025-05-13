import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/Header'
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Header />
      <SearchBar />
      <BusinessList />
    </div>
  )
}

export default App;
