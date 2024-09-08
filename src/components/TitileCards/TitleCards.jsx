import  { useEffect, useRef,useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';
// import cards_data from '../../assets/cards/Cards_data'

// import { TMDB_Access_Key } from '../../config'

const TitleCards = ({title, category}) => {
const [apiData, setApiData] = useState([]);
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjZGM4NWJhZjAyZjc3YjJmYzk2NzkzY2Y5YTk5MiIsIm5iZiI6MTcyNTc0MTExMi4xNTQ4OTIsInN1YiI6IjY2ZGNiMGNiY2RiNTcxNmRlM2RkMTViNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hernbm5mdV7hxv8bTOHQ9bUxDhUNPmNivopaX6RI7Zg'
  }
};



const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel', handleWheel)
},[])
  return (
    
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
        return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>card.original_title</p>
        </Link>
        
      })}
       
      
      </div>
    </div>
  )
}

export default TitleCards

