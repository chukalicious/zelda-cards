import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';

const CardsWrapper = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://botw-compendium.herokuapp.com/api/v3/compendium/all')
            .then((res) => {
                setCards(res.data.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='container'>
            {loading ? (
                <div className='sm:container sm:w-max md:container md:w-max'>
                    <InfinitySpin />
                </div>
            ) : (
                <>
                    {cards.map((card) => {
                        return (
                            <Card
                                card={card}
                                key={card.id}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default CardsWrapper;
