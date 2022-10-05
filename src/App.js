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
        {...item}
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
