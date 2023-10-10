import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import GlobalStyles from './styles/globalStyles'
import Header from '../src/components/Header/index'
import { useState, useEffect } from 'react'
import api from './services/api'


function App() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get('movie');
        const data = response.data.docs;
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error('Erro ao carregar os filmes:', error);
      }
    }

    loadData();
  }, []);

    return (
    <div>
        <Header movies={movies} setFilteredMovies={setFilteredMovies}/>
        <GlobalStyles />
        <Home filteredMovies={filteredMovies} />
    </div>
);
}

export default App;

