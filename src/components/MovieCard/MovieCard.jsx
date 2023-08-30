import {Link} from 'react-router-dom'


export default function MovieCard({movie}) {

   return (
    <Link to={`movies/${movie.title}`}>
    <div className="movie-card">
        <div className="movie-poster"
        style={{backgroungImage: `url(${movie.poster})`}}>
    </div>
<div className="movie-details">
    <h2>{movie.title}</h2>
    <p>Release Date: {movie.releaseDate}</p>
    <p>{movie.posterpath}</p>
    <p></p>
    </div>
</div>
</Link>
   
  )
  
};