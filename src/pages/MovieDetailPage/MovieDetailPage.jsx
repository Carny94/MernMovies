
// when the endpath is /:movieName", {useparams} is able to access the urld
import { useParams } from "react-router-dom"
import { movies } from "../../data";

export default function MovieDetailPage({ movies }) {
  let { movieName } = useParams();
  const clickedMovie = movies.find((movie)=> movie.title === movieName);
  return (
    <div>
      <img src={clickedMovie.posterPath} alt={clickedMovie.title} />
      <h2>Movie: {clickedMovie.title}</h2>
      <p>Release Date: {clickedMovie.releaseDate}</p>
      <h4>Starring: </h4>
      <ul>
      {clickedMovie.cast.map(actor =>
                    <li>{actor}</li>     
      )}                          
      </ul>
    </div>
  )
}
