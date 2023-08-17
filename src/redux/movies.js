// Redux Actions
export const updateMovies = (movies) => ({
    type: 'UPDATE_MOVIES',
    payload: movies,
  });

export const searchedMovies = (movies) => ({
    type: 'SEARCHED_MOVIES',
    payload: movies,
  });

export const currentMovie = (movie) => ({
    type : 'CURRENT_MOVIE',
    payload: movie
  })
  
export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });

  //Providing initial state for the app
  const initialState = {
    movieList: [],
    movie : [],
    searchQuery: ''
  };
  

  
  // Redux Reducer
  export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'SEARCHED_MOVIES':
        return {
          
          movieList : [...action.payload]
        };
      case 'UPDATE_MOVIES':
        return {
          ...state,
          movieList: [...state.movieList, ...action.payload],
        };
      case 'CURRENT_MOVIE' :
        return {
          ...state,
          movie : action.payload
        };
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          searchQuery: action.payload,
        };
      default:
        return state;
    }
  };
  