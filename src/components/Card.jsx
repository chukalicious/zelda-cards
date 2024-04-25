import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ card }) => {
    return (
        <div className='card' key={card.id}>
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <Link to={`${card.id}`}>More Info</Link>
        </div>
    )
}

export default Card