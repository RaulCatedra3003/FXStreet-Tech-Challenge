import React from 'react';

import './styles/App.scss';

import MobileHeader from './components/MobileHeader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <MobileHeader />
      <Header />
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
