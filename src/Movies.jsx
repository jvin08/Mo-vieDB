import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const urlOld =
'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

export const url = 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'

const Movies = () => {
  const {movies, isLoading} = useGlobalContext();
  
  if(isLoading){
    return <div className='loading'></div>
  }
  return <section className='movies'>
    {movies.map((movie)=>{
      const {imdbID:id, Poster:poster,Title:title,Year:year,Type:type} = movie
      return <Link to={`/movies/${id}`} key={id} className='movie'>
        <article>
          <img src={poster === 'N/A'? url:poster} alt={title}/>
          <div className='movie-info'>
            <h4>{title}</h4>
            <p>{year}</p>
          </div>
        </article>
      </Link> 
    })}
  </section>
}

export default Movies
