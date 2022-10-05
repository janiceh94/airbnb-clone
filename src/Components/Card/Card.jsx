import React from 'react';
import './Card.css';
import Star from '../../Images/Star 1.png'

const Card = (props) => {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    return (
        <div className="card">
            {badgeText && <div className = 'card-badge'>
                SOLD OUT
            </div>}
            <img className="card-image" src={require(`../../Images/${props.item.coverImg}`)}alt='cottage'/>
            <div className='card-stats'>
                <img className='card-star' src ={Star} alt='star'/>
                <span>{props.item.stats.rating}</span>
                <span className='grey'>({props.item.stats.reviewCount})</span>
                <span className='grey'>{props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p className='card-price'><span className='bold'>From ${props.item.price}</span> / night</p>
        </div>
    )
}

export default Card

