import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Snippet.css';

function Snippet({ code }) {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark} className="snippet">
      {code}
    </SyntaxHighlighter>
  );
}

export default Snippet;