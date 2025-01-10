import React from 'react';
import './Highlight.css';

function Highlight({ children }) {
  return <span className="highlight">{children}</span>;
}

export default Highlight;