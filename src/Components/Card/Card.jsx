import React from 'react';
import './Card.css';
import Star from '../../Images/Star 1.png'

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    return (
        <div className="card">
            {badgeText && <div className = 'card-badge'>
                SOLD OUT
            </div>}
            <img className="card-image" src={require(`../../Images/${props.coverImg}`)}alt='cottage'/>
            <div className='card-stats'>
                <img className='card-star' src ={Star} alt='star'/>
                <span>{props.stats.rating}</span>
                <span className='grey'>({props.stats.reviewCount})</span>
                <span className='grey'>{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'><span className='bold'>From ${props.price}</span> / night</p>
        </div>
    )
}

export default Card

