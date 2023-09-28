import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Moviedetails = (props) => {
    const api_img = 'https://image.tmdb.org/t/p/w200'
    
    return (
        <div className='imgContainer'>
            {
                props.movieDetails.map((movie,index) => <div>
                    <NavLink to={`movie/${movie.id}`} ></NavLink>
                    <img className='imgbox' src={api_img +movie.poster_path} alt='movieposter'></img>
                </div>)
            }
        </div>
    );
};

export default Moviedetails;