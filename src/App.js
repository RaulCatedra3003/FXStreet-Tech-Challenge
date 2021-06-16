import React, { useState } from 'react';

import './styles/App.scss';

import MobileHeader from './components/MobileHeader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import FeedNavBar from './components/FeedNavBar';

function App() {
  const [filter, setFilter] = useState('latest');

  return (
    <div className="App">
      <MobileHeader />
      <Header />
      <Sidebar />
      <FeedNavBar filter={filter} setFilter={setFilter} />
      <Feed filter={filter} />
      <Widgets />
    </div>
  );
}

export default App;
