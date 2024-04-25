import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ card }) => {
    return (
        // <div className='card m-3' key={card.id}>
        <div className="card sm:w-96 mx-3 my-6 bg-neutral shadow-xl border-primary border-2">
            <figure className="px-10 pt-10">
                <img src={card.image} alt={card.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title capitalize">{card.name}</h2>
                <p className='text-left'>{card.description}</p>
                <div className="card-actions">
                    <Link to={`${card.id}`}>
                        <button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
        // </div>


    )
}

export default Card