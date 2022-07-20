import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavLink from './Components/nav';
import Rocket from './Pages/Rocket';
import Mission from './Pages/Mission';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <h1>Space Travel Hub</h1>
      <Router>
        <NavLink />
        <Routes>
          <Route path="rockets" element={<Rocket />} />
          <Route path="/" element={<Rocket />} />
          <Route path="missions" element={<Mission />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
