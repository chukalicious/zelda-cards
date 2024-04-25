import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar w-full bg-primary text-primary-content mb-10'>
            <div className='flex-1'>
                <Link
                    to='/'
                    className='btn btn-ghost text-xl'
                >
                    Zelda Compendium
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
