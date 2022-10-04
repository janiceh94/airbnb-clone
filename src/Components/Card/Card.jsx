import React from 'react';
import './Card.css';
import Cottage from '../../Images/cottage-gbb028a51e_1920.jpg'
import Star from '../../Images/Star 1.png'

const Card = () => {
    return (
        <div className="card">
            <img className='card-image' src={Cottage} alt='cottage'/>
            <div className='card-stats'>
                <img className='card-star' src ={Star} alt='star'/>
                <span>5.0</span>
                <span className='grey'>(6)</span>
                <span className='grey'>USA</span>
            </div>
            <p>House in the country side</p>
            <p><span className='bold'>From $135</span> / night</p>
        </div>
    )
}

export default Card

