import React from 'react';
import { MovieControls } from './MovieControls';

export const MovieCard = ({movie,type}) => {
    return (
        <div className="cardDesign"> 
            <div className="posterWrapper">
                {
                    movie.poster_path ? (
                        <img src = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} key={movie.id} alt={movie.title} style={{borderRadius:"5px 5px 0px 0px"}}/>
                    )
                    :(<div className="filler-poster"><i class="fa fa-ban" style={{fontSize:"60px"}} aria-hidden="true"></i>Image Not Found!!</div>)
                }
            </div>
            <div className="cardControls">
                <MovieControls type={type} movie={movie} />
            </div>
        </div>
    )
}
