import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CardPage = () => {
    const [card, setCard] = useState({})
    const { id } = useParams()

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${id}`).then((res) => {
            setCard(res.data.data)
        }).catch((err) => console.log(err))
    }, [id])
    return (
        <div className='card'>
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <p>Category: {card.category}</p>
            <p>Common Locations: {card.common_locations}</p>
            <p>Hearts Recovered: {card.hearts_recovered}</p>
            <p>Ingredients: {card.ingredients}</p>
            <p>Effect: {card.effect}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

export default CardPage