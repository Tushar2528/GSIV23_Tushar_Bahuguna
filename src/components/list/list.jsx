import { useEffect, useState, useRef } from "react";
import listStyles from "./listStyles.module.css";
import { useNavigate} from "react-router-dom";
// import home from "../../images/home.png";


export default function List(){

    const navigate = useNavigate();

    const [movieList, setMovieList] = useState([]);
    const search = useRef(null);


    
    const fetchData = async () => {
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=d5038a4b26b9b6d730afe88b64adc740");
        const data = await response.json();
        setMovieList(data.results);
    }

    useEffect(() => {
        fetchData();

    }, []);

    const searchMovie = async () => {
        const movie = search.current.value;
        
        if (movie.trim() !== "") {
            const movieRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d5038a4b26b9b6d730afe88b64adc740&query=${movie}`);
            const movieData = await movieRes.json();
            setMovieList(movieData.results);
        } else {
            // Fetch and set the list of all movies when search input is empty
            fetchData();
        }
    }
    

    return (
        <>
            <div className={listStyles.navbar}>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" style={{width: 600}} type="search" placeholder="Search" ref={search} onChange={searchMovie} aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
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
                            <div>
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