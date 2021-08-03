import React,{useState} from 'react'
import { Card } from './card';

export const Search = () => {
    var timer;
    const[inputQuery,setInputQuery] = useState("");
    const[results,setResults] = useState([]);
    const onInput = e => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          makeApiCall(e);
          timer = undefined;
        }, 400);
    }
    function makeApiCall (e) {
        let searchQuery = e.target.value;
        if(searchQuery){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                console.log(data.results);
                setResults(data.results);
            }
            else{
                setResults([]);
            }
        })
    }
    }
     
    return (
        <div className="searchPage">
            <div>            
                <input type="text" 
                placeholder="Search movies"
                onChange={onInput}
                className="searchBox"
                />
            </div>
            <div className="movieGrid">
                {( results.map(movie => {
                                    return <Card key={movie.id} movie={movie}/>
                                })
                            
                )}
            </div>
        </div>
    )
}
