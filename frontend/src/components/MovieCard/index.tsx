import { Link } from "react-router-dom";
import MovieScore from "../MovieScore";
import { Movie } from "../../types/movie";


//Props podem ser entendidas como argumentos do componente React.
type Props = {
    movie: Movie
}

function MovieCard({ movie } : Props) {
  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore count={movie.count} score={movie.count}/>

        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
