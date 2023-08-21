
export default function MovieCard() {

    const MovieCard = ({ movie }) => (
    
    <div className="movie-card">
        <div className="movie-poster"
        style={{backgroungImage: `url(${movie.poster})`}}>
    </div>
<div className="movie-details">
    <h2>{movie.name}</h2>
    <p>Release Date: {movie.releaseDate}</p>
    </div>
</div>
    
  )};