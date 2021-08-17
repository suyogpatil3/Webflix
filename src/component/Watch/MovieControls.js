import { useAlert } from 'react-alert';
import React,{useContext} from 'react';
import { GlobalContext } from '../../context/GlobalStates';
import { Link } from 'react-router-dom';


export const MovieControls = ({movie,type}) => {
    const {removeFromWatchList,addMovieToWatched,moveToWatchlistFromWatched,removeFromWatched} = useContext(GlobalContext);
    const {viewMoreDetails} = useContext(GlobalContext);
    const alert = useAlert();
    const successAlert = (action,type,movie) =>{
        alert.success(<div style={{textTransform:'none',fontFamily:"'Gowun Dodum', sans-serif",fontWeight:600,fontSize:"20px",minWidth:'50%'}}>
            {(action==="add") ? `${movie} Added to ${type}` : `Deleted ${movie} from your ${type}`}</div>,{timeout:4000}) 
    } 
    return (
        <div className="cardControlWrapper">
            {
                type==='watchList' && (
                    <>
                        <button className="controlButton" 
                        onClick = {() => 
                        {addMovieToWatched(movie);
                        successAlert("add","Watched movies",movie.title);  
                        }}>
                           <i className="fa fa-plus"></i>Watched
                        </button>
                        <button className="controlButton" onClick={() => viewMoreDetails(movie)}>
                            <Link to='/Webflix/details'className="moreControlButton">More</Link>
                        </button>
                        <button className="controlButton"
                          onClick = {() => 
                          {removeFromWatchList(movie.id);
                            successAlert("delete","Watched movies",movie.title);
                          }}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </>
                )
            }
            {
                type==="watched" && (
                    <>
                        <button className="controlButton" onClick={() => {
                                moveToWatchlistFromWatched(movie);
                                successAlert("add","Watch List",movie.title);
                            }}>
                            <i className="fa fa-plus"></i>Watchlist
                        </button>
                        <button className="controlButton" onClick={() => viewMoreDetails(movie)}>
                            <Link to='/Webflix/details' className="moreControlButton">More</Link>
                        </button>
                        <button className="controlButton" onClick={() => {
                            removeFromWatched(movie.id);
                            successAlert("delete","Watched movies list",movie.title);
                        }}>
                         <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </>
                )
            }
          
        </div>
    )
}
