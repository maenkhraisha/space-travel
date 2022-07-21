import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

import Rocket from './Pages/Rocket';
import Mission from './Pages/Mission';
import Profile from './Pages/Profile';
import SingleMission from './Pages/SingleMission';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="singleMission/:id" element={<SingleMission />} />
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
