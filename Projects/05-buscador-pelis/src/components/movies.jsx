function ListOfMovies({movies}){ //movies is missing in props validation
    return (
        <ul className="movies">
          {
            movies.map(movie => ( //movies.map is missing in props validation
              <li className="movie" key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie} />
              </li>
            ))
          }
        </ul>
    )
}
function NoMoviesResults(){
    return (
        <p>No se encontraron resultados</p>
    )
}
export function Movies({movies}){ //movies is missing in props validation
    const hasMovies = movies?.length > 0 //movies.length is missing in props validation

    return (
        hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
}