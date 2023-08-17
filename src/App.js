import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import List from './components/list/list';
import Details from './components/details/details';
import { useDispatch } from 'react-redux';
import { updateMovies, currentMovie, searchedMovies, setSearchQuery } from './redux/movies';

function App() {


  // dispatcher for dispatching parameters to reducer function for complex states
  const dispatch = useDispatch();

  //keeping the simpler states within the component itself
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const search = useRef(null);

  //fetch function to fetch movie list from the API 
  //using useCallback hook to prevent unnecessary re-renders when dependencies passed are not chnaged 
  const fetchData = useCallback(async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d5038a4b26b9b6d730afe88b64adc740&page=${page}`);
    const data = await response.json();
    dispatch(updateMovies(data.results));
    console.log(data.results);
    setTotalPages(data.total_pages);
  }, [dispatch, page]);


  // function to handle condition for infinite scrolling which checks the window height to retrieve more data from the API
  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      if (page < totalPages) {
        setPage(page + 1);
        // fetchData();  // Remove this line, it's unnecessary here
      }
    }
  }, [page, totalPages]);


  //useEffect hook to add event listerner fro handleScroll function
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  //function for searching movies when text is entered on the search field
  const searchMovie = async () => {
    const movie = search.current.value;
    
    if (movie.trim() !== "") {
        const movieRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d5038a4b26b9b6d730afe88b64adc740&query=${movie}`);
        const movieData = await movieRes.json();
        dispatch(searchedMovies(movieData.results));
        dispatch(setSearchQuery(movie));
    } else {
        // Fetch and set the list of all movies when search input is empty
        fetchData();
        dispatch(setSearchQuery(''));
    }
  }

  const movieDetails = (movie) => {
    // setCurrentMovie(movie);
    dispatch(currentMovie(movie));
  }

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List 
                                  fetchData={fetchData} 
                                  search = {search} 
                                  searchMovie={searchMovie} 
                                  movieDetails={movieDetails}
                                  page={page}/>}/>
        <Route path='/details' element={<Details currentMovie={currentMovie}/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
