import React,{createContext,useReducer,useEffect} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    watchList : JSON.parse(localStorage.getItem('watchList'))||[],
    watched :JSON.parse(localStorage.getItem('watched'))||[],
    movieDetails : {},
    cast:[]
};

//create context

export const GlobalContext = createContext(initialState);

//provider components

export function GlobalProvider(props){

    const [state,dispatch] = useReducer(AppReducer,initialState);

    useEffect(() => {
        localStorage.setItem('watchList',JSON.stringify(state.watchList))
        localStorage.setItem('watched',JSON.stringify(state.watched))
    }, [state]);
//actions
    const addToWatchList = movie => {
        dispatch({type:"ADD_TO_WATCHLIST",payload:movie})
    }

    const removeFromWatchList = (id) => {
        dispatch({type: "REMOVE_FROM_WATCHLIST",payload:id})
    }

    const addMovieToWatched = (movie) => {
        dispatch({type:"ADD_TO_WATCHED",payload:movie})
    }

    const moveToWatchlistFromWatched = (movie) => {
        dispatch({type:"MOVE_TO_WATCHLIST_FROM_WATCHED",payload:movie})
    }

    const removeFromWatched = (id) => {
        dispatch({type:"REMOVE_FROM_WATCHED",payload:id})
    }

    const viewMoreDetails = (movie) => {
        dispatch({type:"VIEW_MORE_DETAILS",payload:movie})
    }

    const setCastMembers = (cast) => {
        dispatch({type:"SET_CAST",payload:cast})
    } 

    return(
    <GlobalContext.Provider value={{
        watchList:state.watchList,
        watched:state.watched,
        movieDetails:state.movieDetails,
        addToWatchList:addToWatchList,
        removeFromWatchList:removeFromWatchList,
        addMovieToWatched:addMovieToWatched,
        moveToWatchlistFromWatched:moveToWatchlistFromWatched,
        removeFromWatched:removeFromWatched,
        viewMoreDetails:viewMoreDetails,
        setCastMembers:setCastMembers
    }}
        >
        {props.children}
    </GlobalContext.Provider>
    );
}
