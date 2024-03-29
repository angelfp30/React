import { useState, useEffect, useRef } from 'react';
import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search == '') {
    setError('No se pueden buscar campos vacios')
    return
    }
    if (search.length < 2) {
      setError('Mínimo 2 caracteres')
      return
    }
    setError(null)

  }, [search])

  return [search, updateSearch, error]
}

function App() {
  const [sort, setSort] = useState(false)
  const [search, updateSearch, error] = useSearch();
  const {movies, loading, getMovies} = useMovies({search, sort});

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input 
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
          onChange={handleChange} value={search} name='query' 
          type="text" placeholder="Barbie, Oppenheimer..." />
          <label htmlFor="checkbox">Ordenar por título</label>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : 
        <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
