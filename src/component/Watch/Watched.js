import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalStates';
import {MovieCard} from './MovieCard';

export const Watched = () => {
    const {watched} = useContext(GlobalContext);
    return (
        <div className="movie-page" >
                <div className="header">
                    <h1 className="heading">
                        Watched Movies 
                    </h1>
                    <span className="count-pill">
                        {watched.length} {watched.length == 1 ? "Movie" : "Movies"}
                    </span>
                </div>
                <div>
                {
                watched.length>0 ?
                    watched.map((movie) => (
                        <MovieCard movie={movie} type="watched"/>
                    ))
                    :    <div className="no-movies"> 
                            <h4 className="no-movies">Your Watched movies list is empty!!</h4>
                            <h5>Add some movies by clicking on "more" button on a movie</h5>
                        </div>
                }
                </div>
        </div>
    )
}
