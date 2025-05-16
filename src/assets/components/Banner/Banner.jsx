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

  return (
    <header>
        <div
        className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
        }}
        >
            

        </div>
        <div className="banner-contents">
      <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className="banner-buttons">
        <button className="play-button">Play</button>
        <button className="lists-button">My lists</button>
      </div>
      </div>
    </header>
  );
};

export default Banner;
