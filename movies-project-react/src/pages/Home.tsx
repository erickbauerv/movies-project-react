import { useEffect, useState } from "react";
import { IMovie } from '../interfaces/IMovie';
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, [])

  async function getTopRatedMovies(url: string){
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  }

  return (
    <div>
      <div className="container">
        <h2 className="title">Melhores filmes:</h2>
        <div className="movies-container">
          {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  )
}

export default Home;