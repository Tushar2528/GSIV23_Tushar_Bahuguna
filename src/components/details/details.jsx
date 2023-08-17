import detailsStyles from "./details.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function Details() {

    const navigate = useNavigate();
    const currentMovie = useSelector((state) => state.movies.movie);

    // function to navigate back to the movie listing page
    const gotoListPage = () => {
        navigate('/');
    }



    return (
        <>  

            <div className={detailsStyles.navbar}>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <p><b>Movie Details</b></p>
                            <div onClick={gotoListPage}><ArrowBackIcon  className={detailsStyles.arrowIcon}/></div>
                            
                            
                        </form>
                    </div>
                </nav>
            </div>

            <div className={detailsStyles.movieCard}>
                <div className={detailsStyles.image}>
                    <img src="" alt="Poster"></img>
                </div>
                <div className={detailsStyles.details}>
                    <div><p><h3>{currentMovie.original_title}  (Rating :{currentMovie.vote_average})</h3></p></div>
                    <div>{currentMovie.release_date} | Votes : {currentMovie.vote_count}</div>
                    <div>Language : {currentMovie.original_language}</div>
                    <div>{currentMovie.overview}</div>


                            
                </div>

            </div>

        </>
    )
}