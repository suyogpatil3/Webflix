import React,{useEffect,useState} from 'react'
import { HomepageRow } from './HomepageRow';

export const Homepage = () => {
    const[trending,setTrending] = useState([]);
    const [popular,setPopular] = useState([]);
    const [topRated,setTopRated] = useState([]);
    const[comedy,setComedy] = useState([]);
    const[action,setAction] = useState([]);
    const[animation,setAnimation] = useState([]);
    const urls = [{
                    url:"https://api.themoviedb.org/3/trending/movie/week?api_key=9bacece0951133e3bcf8bccf45202444",
                    method:setTrending,
                    },
                {
                    url : " https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=free",
                    method:setPopular
                },
                {
                    url : "https://api.themoviedb.org/3/movie/top_rated?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&page=1",
                    method:setTopRated
                },
                {
                    url:"https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=free",
                    method:setComedy
                },
                {
                    url:"https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=free",
                    method:setAction
                },
                {
                    url:"https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=free",
                    method:setAnimation
                }]
    useEffect(() => {
        async function fetchData(){
           urls.forEach(async(link) => {
                let response = await fetch(link.url);
                let moviesData = await response.json();
                let method = link.method;
               method(moviesData.results)
            })
        }
        fetchData();
    },[])
    return (
        <div>
            <div>
                <HomepageRow title="Trending this week"  movies = {trending}/>
            </div>
            <div>
                <HomepageRow title="Popular"movies = {popular} type="broadPoster"/>
            </div>
            <div >
                <HomepageRow title="Top Rated"movies = {topRated}/>
            </div>
            <div>
                <HomepageRow title="Top Comedy Movies"movies = {comedy} type="broadPoster"/>
            </div>
            <div>
                <HomepageRow title="Top Action Movies"movies = {action} type="broadPoster"/>
            </div>
            <div>
                <HomepageRow title="Top Animated Movies"movies = {animation} type="broadPoster"/>
            </div>
        </div>
    )
}
