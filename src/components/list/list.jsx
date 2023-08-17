/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect} from "react";
import listStyles from "./listStyles.module.css";
import { useSelector } from 'react-redux';

import { useNavigate} from "react-router-dom";
import BungalowIcon from '@mui/icons-material/Bungalow';
import SearchIcon from '@mui/icons-material/Search';


export default function List({fetchData, search, searchMovie, movieDetails, page}){

    
    //useNavigate hook to handle route change on movie click
    const navigate = useNavigate();

    //useSelector hook to fetch current states from the redux store
    const movieList = useSelector((state) => state.movies.movieList);
    const searchQuery = useSelector((state) => state.movies.searchQuery);

    useEffect(() => {
        fetchData();
        if (search.current) {
            search.current.value = searchQuery;
        }

    },[page, fetchData,search]);


    //function to handle movie details page on click
    const showDetails = (movie) => {
        movieDetails(movie);
        console.log(movie.original_title);
        navigate('/details');
    }
    

    return (
        <>
            <div className={listStyles.navbar}>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <SearchIcon className={listStyles.searchIcon} />
                            <input className="form-control me-2" 
                                                style={{width: 600}} type="search" 
                                                placeholder="Search" 
                                                ref={search} 
                                                onChange={searchMovie} 
                                                aria-label="Search" >                   
                            </input>   
                            <BungalowIcon className={listStyles.icons} ></BungalowIcon>
                            
                        </form>
                    </div>
                </nav>
            </div>

            <div className={listStyles.movies}>

                {movieList.length > 0 ?
                    <>
                        {movieList.map((movie, index) =>(
                            <div className={listStyles.card} key={index}>
                                
                                <div className={listStyles.image}>
                                    <img src = {movie.poster_path} alt="poster"></img>
                                </div>
                                <div className={listStyles.details}>
                                    <div onClick={()=>showDetails(movie)}>
                                        <p><b>{movie.original_title}</b></p>
                                        <p>Rating : <b>{movie.vote_average}</b></p>
                                    </div>
                                    <p>{movie.overview}</p>
                                                    
                                                    
                                </div>
                                                
                                                
                            </div>
                        ))}
                    </> : 
                    
                    <h2>No Search Results Found!</h2>
                }


         
                    
            </div>
        </>

    )
}