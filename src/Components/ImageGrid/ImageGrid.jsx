import React from 'react';
import './ImageGrid.css';
import ImgGrid from '../../Images/Group 77 (1).png';

const ImageGrid = () => {
    return (
        <section className="grid-image">
            <img className='photos' src = {ImgGrid} alt='images'/>
            <div className="content">
                <h1>Live Anywhere</h1>
                <p>Travel anywhere without leaving the comfort of home</p>
            </div>
        </section>
    )
}

export default ImageGrid