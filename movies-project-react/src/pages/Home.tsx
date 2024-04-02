import { useEffect, useState } from "react";
import { IMovie } from '../interfaces/IMovies';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState<IMovie[]>([]);

  async function getTopRatedMovies(url: string){
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, [])

  return (
    <div>
      {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
  )
}

export default Home;