import './App.css'
import responseMovies from './mocks/results.json'
//import withoutMovies from './mocks/no-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  const renderMovies = () => {
    return (
      <ul>
        {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie} />
            </li>
          ))
        }
      </ul>
    )
  }

  const renderNoResults = () => {
    return (
      <p>No se encontraron resultados</p>
    )
  }


  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form">
          <input type="text" placeholder="Barbie, Oppenheimer..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? renderMovies()
            : renderNoResults()
        }
      </main>
    </div>
  )
}

export default App
