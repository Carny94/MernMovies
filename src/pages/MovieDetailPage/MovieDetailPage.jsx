import { movies } from "../../data";
import { useParams } from 'react-router-dom';

export default function MovieDetailPage() {
    const MovieDetailPage = () => {
        const { movieName } = useParams();
        const selectedMovie = movies.find((movie) => movie.name === movieName);
        
     if (!selectedMovie) {
     return <div>Movie not found</div>;
        }
        
          const { name, releaseDate, poster, cast } = selectedMovie;

          return (
            <div>
              <h1>{name}</h1>
              <p>Release Date: {releaseDate}</p>
              <img src={poster} alt={name} />
              <p>Cast: {cast.join(', ')}</p>
              {/* Add more movie details here */}
            </div>
          );
        };

    }
