import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utilities/request'

function Rowlists() {
  return (
    <div>
        <Row title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLarg={true}
            />
        <Row title="Trending Now"
        fetchUrl={requests.fetchTrending}   
        /> 
       <Row title="Top Rated"
       fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movie"
        fetchUrl={requests.fetcActionMovies} />
        <Row title="Comedy"
        fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movie"
        fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movie"
        fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries"
        fetchUrl={requests.fetchDocumentaries} />
        <Row title="Tv Show"
        fetchUrl={requests.fetchTvShow} />
      
    </div>
  )
}

export default Rowlists
