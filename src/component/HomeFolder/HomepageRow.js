import React,{useState,useContext} from 'react'
import { GlobalContext } from '../../context/GlobalStates';
import { Link } from 'react-router-dom';

export const HomepageRow = ({movies,title,type}) => {
    const {viewMoreDetails} = useContext(GlobalContext);
    return (
        <div className="rowBody">
            <h2 className="rowHeading">{title}</h2>
            <div className = {type==="broadPoster" ? "row_broadCards":"row_normalCards"} style={{paddingLeft:"30px"}}> 
                {
                    movies.map((movie) =>(
                        <div className= "movie-container">
                        <img
                            className={type==="broadPoster" ? "row_broadPoster":"row_poster"}
                            src = {`https://image.tmdb.org/t/p/w300${type==="broadPoster" ? movie.backdrop_path : movie.poster_path}` /*backdrop_path */}
                            alt={movie.name}
                            key={movie.id}
                        />
                        <div className={type==="broadPoster" ? "movie-broadPoster-overlay" : "movie-overlay"}>
                            <p className="movie_title">{movie.title}</p>
                            <div>
                            <i class="fas fa-star rating" style={{opacity:"100%"}}></i><span className="rating">{movie.vote_average}</span><p className="overview">{movie.overview}</p>
                            </div>
                            <button className="moreButton" onClick={() => viewMoreDetails(movie)}><Link to='/details' style={{textDecoration:'none',color:'white'}}> more</Link></button>
                        </div>
                        </div>
                    ))
                }
                <div>
                </div>
            </div>
        </div>
    )
}
