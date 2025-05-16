// import React from 'react'
import React, {useEffect, useState} from 'react'
import axios from '../../../utilities/axios'
import './row.css'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'


const Row=({title, fetchUrl, isLarg})=> {
    const[movies, setMovie]=useState([]);
    const base_url='http://image.tmdb.org/t/p/original';
    const[trailerUrl, setTrailerUrl]=useState("");

    useEffect(()=>{
        (async()=>{
            try{
                const request=await axios.get(fetchUrl)
                setMovie(request.data.results)

            }catch(error){
                console.log("error", error)

            }
        })()
    },[fetchUrl]);
    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'));
            })
        }
      
    }
     const opts={
            height:'390',
            width:'100%',
            playerVars:{
                autoPlay:1
            }
        
    }
   



  return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row-posters">
            {movies?.map((movie,index)=>(
                <img 
                onClick={()=>handleClick(movie)}
                key={index} src={`${base_url}${isLarg ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLarg && "row_posterLarge"}`}
                />
                
            ))}
        </div>
        <div style={{padding:'40px'}}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}    
                </div>

      
    </div>
  )
}

export default Row
