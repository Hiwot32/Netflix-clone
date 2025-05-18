import React from 'react'
import { useEffect, useState } from 'react';
import axios from '../../utilities/axios';
import requests from '../../utilities/request'
import './banner.css'


const Banner=()=> {
    const [movie, setMovie]=useState({});
     useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setMovie(results[randomIndex]);
      } catch (error) {
        console.log("Error fetching movie:", error);
      }
    })();
  }, []);
  console.log(movie)
  
  function turncate(str, n){
    return str?.length>n ? str?.substr(0,n-1)+'...' : str;
  }

  return (
    <header>
        <div className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
        }}
        >
            

        </div>
        <div className="banner-contents">
      <h2 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h2>
      <div className="banner-button">
        <button className="banner-buttons play">Play</button>
        <button className="banner-buttons blists">My lists</button>
      </div>
      <h5 className="banner-description">{turncate(movie?.overview, 150)}</h5>
      </div>
    </header>
  );
};

export default Banner;
