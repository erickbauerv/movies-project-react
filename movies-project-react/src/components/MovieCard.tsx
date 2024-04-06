import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IMovie } from '../interfaces/IMovie';

const imagesURL = import.meta.env.VITE_IMG;

type MovieCardProps = {
  movie: IMovie;
  showLink?: boolean;
};

function MovieCard({ movie, showLink = true} : MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      { showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link> }
    </div >
  )
} 

export default MovieCard;