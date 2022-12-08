import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './useFetch'
import { url } from './Movies'
import useFetch from './useFetch'

const SingleMovie = () => {
  const {  id } = useParams()
  // const [movie, setMovie] = useState({})
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState({show:false,msg:''})
  const [readMore, setReadMore] = useState(false)
  const movieUrl = `&i=${id}&plot=full`

  // const fetchMovie = async (url) => {
  //   const response = await fetch(url)
  //   const data = await response.json();
    
  //   if(data.Response === "False"){
  //     setError({show:true,msg:data.Error})
  //     setLoading(false)
  //   } else{
  //     setMovie(data)
  //     console.log(data)
  //     setIsLoading(false)
  //   }
  // }

  // useEffect(()=>{
  //   fetchMovie(movieUrl);
  // },[id]) //envoked when id changes

  const {isLoading, error, data: movie} = useFetch(`&i=${id}&plot=full`);
  if (isLoading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return <div className='page-error'>
      <h1>{error}</h1>
      <Link to="/" className='btn'>
        back to movies
      </Link>
    </div>
  }
  const {Poster:poster,Title:title, Plot:plot, Year:year} = movie;
  return <section className='single-movie'>
    <img src={poster === 'N/A'? url:poster} alt={title}/>
    <div className='single-movie-info'>
      <h2>{title}</h2>
      <p>
        {readMore ? plot:`${plot.substring(0,200)}...`}
        <button onClick={()=> setReadMore(!readMore)}>
          {readMore?"show less":"read more"}
        </button>
      </p>
      <h4>{year}</h4>
      <Link to="/" className='btn'>back to movies</Link>
    </div>
  </section>
}

export default SingleMovie
