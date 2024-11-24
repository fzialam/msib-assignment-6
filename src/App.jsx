import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { useEffect, useState } from 'react'
import { Header } from './components/header';
import { Movies } from './components/movies';
import { Search } from './components/search';
import { useSelector } from 'react-redux';
import axios from 'axios';

function App() {
  const search = useSelector((state) => state.search);
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get('https://www.omdbapi.com/?apikey=881a1da3', {
      params: {
        s: search
      }//{search}
    })
      .then((resp) => {
        setMovies(resp.data.Search);
      })
      .catch((error) => {
        console.error('Error Fetching Movies', error);
      })
  }

  useEffect(() => {
    if (search) {
      fetchMovies(); // Panggil fungsi untuk fetch data jika ada query pencarian
    } 
    else setMovies([]);
  }, [search]);


  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div id="navbar" >
        <nav className="navbar bg-primary">
          <div className="container-fluid">
            <Header />
            <Search />
          </div>
        </nav>
      </div>
      <div id='main-section' className='' style={{marginTop: '100px'}}>
        <div className="container mx-0">
          <div className="row rows-col-2 w-100">
            <Movies movies={movies} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
