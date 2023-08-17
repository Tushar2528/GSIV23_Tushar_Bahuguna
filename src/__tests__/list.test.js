import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import List from '../components/list/list';


// Unit test case to check if the list component renders the movie titles correctly on the page
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


  });
});


