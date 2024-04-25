import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const CardsWrapper = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get("https://botw-compendium.herokuapp.com/api/v3/compendium/all")
            .then((res) => {
                setCards(res.data.data)
            }).catch((err) => console.log(err))
    }, [])

    return (
        <div className='sm:container sm:w-max md:container md:w-max'>
            {cards.map((card) => {
                return (
                    <Card card={card} key={card.id} />
                )
            })}
        </div>
    )
}

export default CardsWrapper