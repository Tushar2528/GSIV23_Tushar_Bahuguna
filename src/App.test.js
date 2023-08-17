import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import redux-mock-store

// Import your actual reducers
import rootReducer from './store'; // Adjust the path

test('renders learn react link', () => {
  // Configure the mock store with your actual reducer and initial state
  const mockStore = configureStore(); // Import middleware if used
  const initialState = {
    movies: {
      movieList: [], 
      movie: [],
      searchQuery: '',
    },
  };
  
 // Adjust this with your initial state
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  
});



