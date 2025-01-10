import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './styles/App.css';
import Home from './pages/Home';
import CrearComponentes from './pages/CrearComponentes';
import UsoJsx from './pages/UsoJsx';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />


        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crearComponentes" element={<CrearComponentes />} />
            <Route path="/usoJsx" element={<UsoJsx />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;