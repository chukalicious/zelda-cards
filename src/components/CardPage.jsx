import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CardPage = () => {
    const [card, setCard] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        axios
            .get(
                `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${id}`
            )
            .then((res) => {
                setCard(res.data.data);
            })
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <div className='card px-1'>
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content flex-col lg:flex-row'>
                    <img
                        src={card.image}
                        alt={card.name}
                        className='max-w-sm rounded-lg shadow-2xl ring-2 ring-offset-2 ring-accent'
                    />
                    <div>
                        <h1 className='text-5xl font-bold capitalize'>{card.name}</h1>

                        <div className='badge badge-primary capitalize mx-2'>
                            {card.category}
                        </div>

                        {card.common_locations && (
                            <div>
                                {card.common_locations.map((location) => {
                                    return (
                                        <div key={location} className='badge badge-primary badge-outline m-2'>
                                            {location}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {card.hearts_recovered && (
                            <div className='badge badge-outline badge-error m-2'>
                                {card.hearts_recovered}
                            </div>
                        )}

                        {card.drops && (
                            <div>
                                {card.drops.map((dropped) => {
                                    return (
                                        <div key={dropped} className='badge badge-warning m-2'>{dropped}</div>
                                    );
                                })}
                            </div>
                        )}
                        <p className='py-2'>{card.description}</p>

                        <button
                            className='btn btn-primary mt-6 justify-center'
                            onClick={goBack}
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPage;
