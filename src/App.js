import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Milktea from './pages/milktea';
import Fruittea from './pages/fruittea';
import Seasonal from './pages/seasonal';
import Freshtea from './pages/freshtea';
import Cafe from './pages/cafe';
import Special from './pages/special';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/milktea' component={Milktea} />
        <Route path='/fruittea' component={Fruittea} />
        <Route path='/seasonal' component={Seasonal} />
        <Route path='/freshtea' component={Freshtea} />
        <Route path='/cafe' component={Cafe} />
        <Route path='/special' component={Special} />
      </Routes>
    </Router>
    
  );
}

export default App;
