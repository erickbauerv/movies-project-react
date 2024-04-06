import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IMovie } from '../interfaces/IMovie';
import MovieCard from "../components/MovieCard";
import "../styles/MoviesGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  async function getSearchedMovies(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search;