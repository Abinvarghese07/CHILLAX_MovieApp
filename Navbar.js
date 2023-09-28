import React from 'react';
import { Link } from 'react-router-dom';
import Trending from './Trending';

const Navbar = () => {
    return (
        <>
            <nav>
            <div className='navContainer'>
            <h2>
               <Link to='/'>CHILLAX</Link>
            </h2>
            <ul>
                <li>
                    <Link to="trending">Trending</Link>
                </li>
                <li>
                    <Link>Top Rated</Link>
                </li>
                <li>
                    <Link>Upcoming</Link>
                </li>
            </ul>
           </div>


        </nav>
        </>
        

    
    );
};

export default Navbar;