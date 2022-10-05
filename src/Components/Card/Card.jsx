import React from 'react';
import './Card.css';
import Star from '../../Images/Star 1.png'
import Cottage from '../../Images/cottage-gbb028a51e_1920.jpg'

const Card = (props) => {
    return (
        <div className="card">
            {/* <img className="card-image" src={`${props.cardImg}`}alt='cottage'/> */}
            <img className="card-image" src={Cottage}alt='cottage'/> 
            <div className='card-stats'>
                <img className='card-star' src ={Star} alt='star'/>
                <span>{props.rating}</span>
                <span className='grey'>({props.reviewCount})</span>
                <span className='grey'>{props.country}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'><span className='bold'>From ${props.price}</span> / night</p>
        </div>
    )
}

export default Card

