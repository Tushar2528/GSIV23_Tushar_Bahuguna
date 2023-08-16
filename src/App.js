import { useState, useEffect, useRef } from 'react';
import './App.css';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import List from './components/list/list';
import Details from './components/details/details';

function App() {



  const [movieList, setMovieList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([]);
  const search = useRef(null);


  
  const fetchData = async () => {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=d5038a4b26b9b6d730afe88b64adc740");
      const data = await response.json();
      setMovieList(data.results);
  }


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

  const movieDetails = (movie) => {
    setCurrentMovie(movie);
  }

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List 
                                  fetchData={fetchData} 
                                  search = {search} 
                                  searchMovie={searchMovie} 
                                  movieList={movieList} 
                                  movieDetails={movieDetails}/>}/>
        <Route path='/details' element={<Details currentMovie={currentMovie}/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <List/>
    // </div>
  );
}

export default App;
