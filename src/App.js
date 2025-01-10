import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './styles/App.css';
import Home from './pages/Home';
import CrearComponentes from './pages/CrearComponentes';
import Page2 from './pages/Page2';
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
            <Route path="/page2" element={<Page2 />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;