import React from 'react'
import { useSelector } from 'react-redux';

import Carddd from './Carddd';
import Trailer from './Trailer';


function CardList() {

  const movies= useSelector((state)=>state.Moviereducers.movies);
  return (
    
    <div style={{display:'flex', flexWrap:"wrap", justifyContent:"space-between", margin: '50px', padding:"50px"}}>
      { movies.map((movie)=>(<Carddd movie={movie}/>))}


   
    </div>
  );
}

export default CardList;