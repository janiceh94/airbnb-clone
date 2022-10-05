import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import ImageGrid from './Components/ImageGrid/ImageGrid';
import Card from './Components/Card/Card';
import Data from './Data/Data';

function App() {

  const cards = Data.map(item => {
    return (
      <Card
        key = {item.id}
        cardImg = {item.coverImg}
        ratings = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <ImageGrid/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
