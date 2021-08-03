export default function AppReducer(state,action) {
    switch(action.type){
        case "ADD_TO_WATCHLIST" : return {
            ...state,
            watchList:[action.payload,...state.watchList]
        }
        case "REMOVE_FROM_WATCHLIST" : return{
            ...state,
            watchList : state.watchList.filter(movie =>( movie.id !== action.payload))
        }
        case "ADD_TO_WATCHED" : return {
            ...state,
            watched:[action.payload,...state.watched],
            watchList : state.watchList.filter(movie =>( movie.id !== action.payload.id))
        }
        case "MOVE_TO_WATCHLIST_FROM_WATCHED" : return{
            ...state,
            watched : state.watched.filter(movie =>( movie.id !== action.payload.id)),
            watchList:[action.payload,...state.watchList]
        }

        case "REMOVE_FROM_WATCHED" : return {
            ...state,
            watched: state.watched.filter(movie =>(movie.id!== action.payload))
        }

        case "VIEW_MORE_DETAILS" : return {
            ...state,
            movieDetails:action.payload
        }
        case "SET_CAST" : return {
            ...state,
            cast:action.payload
        }
        default: return state;
    }
}