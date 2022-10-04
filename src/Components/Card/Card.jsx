import React from 'react';
import './Card.css';
import Cottage from '../../Images/cottage-gbb028a51e_1920.jpg'
import Star from '../../Images/Star 1.png'

const Card = () => {
    return (
        <div className="card">
            <img src={Cottage} alt='cottage'/>
            <div className='card-stats'>
                <img src ={Star} alt='star'/>
                <span>5.0</span>
                <span>(6)</span>
                <span>USA</span>
            </div>
            <p>House in the country side</p>
            <p>From $135 / night</p>
        </div>
    )
}

export default Card

