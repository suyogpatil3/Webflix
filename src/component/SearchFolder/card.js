import React,{useContext} from 'react';
import { GlobalContext } from '../../context/GlobalStates';
import { Link } from 'react-router-dom';

export const Card = ({movie}) => {
    const {viewMoreDetails} = useContext(GlobalContext);
    return (
        <div className="movie-container resultCard">
            <div className="resultCardDesign"> 
                <div className="posterWrapper">
                    {movie.poster_path ? (
                            <img className="search_poster" src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={movie.id} alt={movie.title}/>
                        )
                        :(<div className="search-filler-poster"><i class="fa fa-ban" style={{fontSize:"60px"}} aria-hidden="true"></i>Image Not Found!!</div>)
                    }
                </div>
                <div className="search-overlay">
                    <p className="movie_title">{movie.title}</p>
                    <div>
                        <i class="far fa-star rating" style={{opacity:"100%"}}></i>{movie.vote_average}<p className="overview">{movie.overview}</p>
                    </div>
                    <button className="moreButton" onClick={() => viewMoreDetails(movie)}><Link to='/Webflix/details' style={{textDecoration:'none',color:'white'}}> more</Link></button>
                </div>
            </div> 
        </div>
    )
}
