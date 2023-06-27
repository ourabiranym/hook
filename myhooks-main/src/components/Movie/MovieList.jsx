import React from 'react'
import Movie from "../Movie/Movie";

function MovieList({movies, search}) {
 
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
      {movies.map((movie)=> <Movie movie={movie}/>)}
    </div>
  )
}

export default MovieList