import React,{useContext}from 'react';
import { GlobalContext } from '../../context/GlobalStates';
import { MovieCard } from './MovieCard';

export const Watchlist = () => {
    const{watchList} = useContext(GlobalContext)
    return (
        <div className="watchWrapper">
            <div className="movie-page">
                <div className="header">
                    <h1 className="heading">
                        WatchListed Movies 
                    </h1>
                    <span className="count-pill">
                        {watchList.length} {watchList.length == 1 ? "Movie" : "Movies"}
                    </span>
                </div>
                <div>
                    {watchList.length>0 ?
                        watchList.map((movie) => (
                            <MovieCard movie={movie} type="watchList"/>
                        ))
                        :  <div className="no-movies"> 
                                <h4 className="no-movies">Your Watchlist is empty!!</h4>
                                <h5>View details of a movie and add it to your list by clicking on "more" button on the movie</h5>
                            </div>
                    }
                </div> 
            </div>
        </div>
    )
}
