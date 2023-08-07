import React from "react";

function MovieCard({ movie }) {
return (

<div className="movie-card"> <div className="movie-image"> 
<img src={movie.show.image.medium} alt="movie" /> </div>

<h3 className="movie-heading">{movie.show.name}</h3>
 <p>⭐ {movie.show.rating.average || 0}</p>
  <ul className="list"> {movie.show.genres.map((genre) => 
  ( <li key={genre}> | {genre}</li> ))}
   </ul> <button>
     <a href={movie.show.url} target="_blank" rel="noopener noreferrer" className="website-button">
     Website </a> </button> </div> ); }
export default MovieCard;