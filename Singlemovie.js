import React from 'react';

const Singlemovie = (props) => {
    const id =`movie.${id}`
    const api_img = 'https://image.tmdb.org/t/p/w200';

    return (
        <div>
            {
                props.movieDetails.map((movie,index) => <div>
                <h2>{id}</h2>
                    
                    <img className='imgbox' src={api_img +movie.poster_path} alt='movieposter'></img>
                </div>)
            }
        </div>
    );
};

export default Singlemovie;