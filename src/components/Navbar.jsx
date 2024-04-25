import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-base-100'>
            <div className='flex-1'>
                <Link
                    to='/'
                    className='btn btn-ghost text-xl'
                >
                    Zelda Compendium
                </Link>
            </div>
            <div className='flex-none'></div>
        </div>
    );
};

export default Navbar;
