import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      <div className="accordion">
        <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleAccordion(0)}>
            Introducción
          </div>
            <div className="accordion-content">
                <Link to="/">Home</Link>
                <Link to="/crearcomponentes">Crear Componentes</Link>
                <Link to="/usoJsx">Uso de Jsx</Link>      
            </div>
           
        </div>
        <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleAccordion(1)}>
            Section 2
          </div>
          <div className="accordion-content">
            <Link to="/page3">Page 3</Link>
            <Link to="/page4">Page 4</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
