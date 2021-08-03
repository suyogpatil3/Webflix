import { useAlert } from 'react-alert';
import React,{useContext,useEffect,useState} from 'react';
import { GlobalContext } from '../../context/GlobalStates';
import Cast from './Cast';
const genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

const Details = () => {
    const {movieDetails} = useContext(GlobalContext);
    const[castMembers,setCastMembers] = useState([]);
    const[trailerLink,setTrailerLink] = useState("")
    const alert = useAlert();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieDetails.id}/credits?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                console.log("Cast members",data.cast);
                setCastMembers(data.cast);
            }
            else{
                setCastMembers([]);
            }
        })
        if(movieDetails!==[]){
            fetch(`https://api.themoviedb.org/3/movie/${movieDetails.id}/videos?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US`)
            .then(res => res.json())
            .then((data) => {
                if(!data.errors){
                    let obj = data.results.find((el) => (el.type ==="Trailer" && el.site === "YouTube"))
                    console.log(obj.key);
                    (obj !== undefined) ? setTrailerLink(obj.key) : setTrailerLink("");
                }
                else{
                    setTrailerLink("");
                }
            })
            .catch(error => {
                return null;
            })
        }
      
    }, [movieDetails])
    const{addMovieToWatched,addToWatchList,watchList,watched} = useContext(GlobalContext);
    let storedWatchListMovie = watchList.find(m => m.id === movieDetails.id);
    const storedWatchedMovie = watched.find( m => m.id === movieDetails.id);
    console.log("Id is",movieDetails.id);
    const disabledWatchlistButton = storedWatchListMovie 
                                    ? true 
                                    : storedWatchedMovie
                                    ? true 
                                    : false;
    const disabledWatchedButton = storedWatchedMovie ? true : false
    let genre=[];
    return (
        <div> {(movieDetails!==undefined && movieDetails.genre_ids!==undefined) ? 
        <div style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}")`,width:'100%',backgroundRepeat:'no-repeat',backgroundSize:'100%',height:'100%'}}>
             <div className="detailsContent row">
                <div className="col-xs-4 col-sm-6 col-md-5 col-lg-4">
                    <img className="image" alt="image-error"src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}/>
                </div>
                <div className="col-xs-8 col-sm-6 col-md-7 col-lg-8">
                    <h2 className="detailsTitle">
                        {movieDetails.title}
                    </h2>
                    <span> Released: {movieDetails.release_date.toLocaleString()}</span> <span className="genreWrapper"> 
                    {
                    movieDetails.genre_ids.map(element => {
                                return genres.map(el => (el.id == element) ? (<span className="genre">{el.name}</span>):"")
                        })
                    }
                    </span>
                    <h5 className="detailsOverview">{movieDetails.overview}</h5>
                    <span className="details_actions">
                        <span className="rating">
                        <img src="https://img.icons8.com/color/35/000000/christmas-star.png" className="rating_image"/>
                            <span style={{fontSize:"21px"}}>
                                {movieDetails.vote_average}/10
                            </span>
                        </span>
                        <span className="control">
                            <button className="addButton" disabled={disabledWatchlistButton} 
                                onClick={() => {
                                                    addToWatchList(movieDetails);
                                                    alert.success('Added to Watch List!',{timeout:3000})
                                                }
                                        }>
                                {disabledWatchlistButton ?
                                <i class="fas fa-check"></i> : 
                                <i class="fas fa-plus"></i>} 
                                Watchlist
                            </button>
                        </span>
                        <span className="control">
                            <button className="addButton" disabled={disabledWatchedButton} 
                            onClick={() => {
                                            addMovieToWatched(movieDetails);
                                            alert.success('Added to Watched',{timeout:3000})
                                        }
                                    }>
                                {disabledWatchedButton ? 
                                <i class="fas fa-check"></i> : 
                                <i class="fas fa-plus"></i>} 
                                Watched</button>
                        </span>
                        {
                            (trailerLink!=="") ? 
                            <span >
                                <button className="addButton" onClick={()=> window.open(`https://www.youtube.com/watch?v=${trailerLink}`, "_blank")}><img src="https://img.icons8.com/color/24/ffffff/youtube-play.png"/> Trailer</button>
                            </span>
                            : ""
                        }
                    </span>
                    <div>
                        <Cast castMembers={castMembers}/>
                    </div>
                </div>
            </div>
        </div>
        :<h1 className="Error">Details Not Found</h1>
        }
        </div>
    )
}

export default Details
