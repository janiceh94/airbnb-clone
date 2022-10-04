import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import ImageGrid from './Components/ImageGrid/ImageGrid';
import Card from './Components/Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <ImageGrid/>
    <Card/>
  </React.StrictMode>
);

