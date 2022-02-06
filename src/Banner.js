import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from './axios'
import request from './request';
function Banner() {

  const [movie,setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(request.fetchNetflixOriginals)
      setMovie(response.data.results[Math.floor(Math.random()* response.data.results.length - 1)])
      console.log(response.data.results[Math.floor(Math.random()* response.data.results.length - 1)])
    }
    fetchData();
  },[])


    function truncate(string,totalChar){
        return string?.length > totalChar ? string.substr(0,totalChar-1) + '...' : string;
    }

  return (<header className='Banner' 
  style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center'
  }}>
      <div className='Banner_content'>
        <h1 className='Banner_title'>{movie?.original_title}</h1>
        <div className='Banner_buttons'>
            <button className='Banner_button'>Play</button>
            <button className='Banner_button'>My List</button>
        </div>
        <h1 className='Banner_desc'>{truncate(movie?.overview,150)}</h1>
      </div>
      <div className='banner_fadeBottom' />
  </header>);
}

export default Banner;

