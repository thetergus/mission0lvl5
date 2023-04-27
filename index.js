import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import SearchSection from './Search'
import GallerySection from './Gallery'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <body className="main">
  <React.StrictMode>
    <NavBar/>
    <SearchSection/>
    <GallerySection/>
  </React.StrictMode>
  </body>
);

