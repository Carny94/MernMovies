import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../data";

export default function MovieListPage({movies}) {
  console.log(movies)

    return (
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      );
      
          }