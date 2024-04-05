import React from 'react';
import HomePage from './Components/HomePage';
import MenuOptions from './Components/MenuOptions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/o-menu" element={<HomePage />} />
          <Route path="/menu" element={<MenuOptions />} />
          {/* <Route path="/menu/starter" element={<StarterMenu/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

