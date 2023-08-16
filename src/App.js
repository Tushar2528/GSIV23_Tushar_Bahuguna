import './App.css';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import List from './components/list/list';
import Details from './components/details/details';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <List/>
    // </div>
  );
}

export default App;
