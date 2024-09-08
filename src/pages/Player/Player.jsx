import  { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'


import { useNavigate, useParams } from 'react-router-dom'
// import { TMDB_Access_Key } from '../../config'
 
const Player = () => {
  // const state = props.location;
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: `Bearer ${TMDB_Access_Key}`
  //   }
  // };

  // useEffect(()=>{
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  //   .then(response => response.json())
  //   .then(response => setApiData(response.results[0]))
  //   .catch(err => console.error(err));
  //   console.log(props);
  // },[])
  
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjZGM4NWJhZjAyZjc3YjJmYzk2NzkzY2Y5YTk5MiIsIm5iZiI6MTcyNTc0MTExMi4xNTQ4OTIsInN1YiI6IjY2ZGNiMGNiY2RiNTcxNmRlM2RkMTViNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hernbm5mdV7hxv8bTOHQ9bUxDhUNPmNivopaX6RI7Zg'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
 

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=""  onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
