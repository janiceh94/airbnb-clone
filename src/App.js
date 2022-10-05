import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import ImageGrid from './Components/ImageGrid/ImageGrid';
import Card from './Components/Card/Card';

function App() {
  return (
    <div>
      <Navbar/>
      <ImageGrid/>
      <Card
        img = "cottage-gbb028a51e_1920.jpg"
        ratings = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "House in the country side"
        price = {135}
      />
    </div>
  );
}

export default App;
