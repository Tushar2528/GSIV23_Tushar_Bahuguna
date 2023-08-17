import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import List from '../components/list/list';
import rootReducer from '../redux/movies';

describe('MovieList Component', () => {
  it('renders movie titles', () => {
    const mockStore = configureStore();
    const initialState = {
      movies: {
        movieList: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
        ],
        movie: [],
        searchQuery: '',
      },
    };
    const store = mockStore(initialState);

    const mockFetchData = jest.fn(); // Create a mock function
    const mockSearchRef = { current: { value: '' } }; // Mocked search reference

    render(
      <Provider store={store}>
        <BrowserRouter>
          <List fetchData={mockFetchData} search={mockSearchRef} /> 
        </BrowserRouter>
      </Provider>
    );

    // Your test assertions...
  });
});



// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { BrowserRouter } from 'react-router-dom'; 
// import List from '../components/list/list';

// // Import your reducers if needed
// import rootReducer from '../redux/movies'; // Adjust the path


// describe('MovieList Component', () => {
//     it('renders movie titles', () => {
//       // Configure the mock store with your reducer and initial state
//       const mockStore = configureStore();
//       const initialState = {
//         movies: {
//           movieList: [
//             { id: 1, title: 'Movie 1' },
//             { id: 2, title: 'Movie 2' },
//           ],
//           movie: [],
//           searchQuery: '',
//         },
//       };
//       const store = mockStore(initialState);
      
//       render(
//         <Provider store={store}>
//             <BrowserRouter> 
//                 <List />
//             </BrowserRouter>
//         </Provider>
//       );
      
//       // Check if movie titles are displayed
//       const movie1Title = screen.getByText('Movie 1');
//       const movie2Title = screen.getByText('Movie 2');
      
//       expect(movie1Title).toBeInTheDocument();
//       expect(movie2Title).toBeInTheDocument();
//     });
//   });
  
