import { useEffect, useState, useRef } from "react";
import listStyles from "./listStyles.module.css";
import { useNavigate} from "react-router-dom";
import BungalowIcon from '@mui/icons-material/Bungalow';
import SearchIcon from '@mui/icons-material/Search';
// import home from "../../images/home.png";


export default function List({fetchData, search, searchMovie, movieList, movieDetails}){

    

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();

    }, []);

    const showDetails = (movie) => {
        movieDetails(movie);
        console.log(movie.original_title);
        navigate('/details');
    }
    

    return (
        <>
            <div className={listStyles.navbar}>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <SearchIcon className={listStyles.searchIcon} />
                            <input class="form-control me-2" 
                                                style={{width: 600}} type="search" 
                                                placeholder="Search" 
                                                ref={search} 
                                                onChange={searchMovie} 
                                                aria-label="Search" >
                                                    
                            </input>   
                                             
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                            <BungalowIcon className={listStyles.icons} ></BungalowIcon>
                            {/* <a class="navbar-brand" href="#">
                                <img src={home} alt="Bootstrap" width="30" height="24" className={listStyles.image}/>
                            </a> */}
                        </form>
                    </div>
                </nav>
            </div>

            <div className={listStyles.movies}>
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


                    {/* <div className={listStyles.card}>
                        
                        <div className={listStyles.image}></div>
                        <div className={listStyles.details}>
                            <div>
                                <p><b>Movie Title</b></p>
                                <p>(Rating)</p>
                            </div>
                            <p>Description...(2 lines)</p>
                            
                            
                        </div>
                        
                        
                    </div> */}
                    
            </div>
        </>

    )
}