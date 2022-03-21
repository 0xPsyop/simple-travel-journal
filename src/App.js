import './App.css';
import React from "react"
import Nav from "./Nav.js"
import data from "./Data.js"
import Cards from "./Cards.js"
import Data from './Data.js';


export default function App(){
 
  const cardEl  = data.map( info => {
   return (  
    <Cards 
      info = {info}/>
      )
  }

  )

  return(
    <div  className='cont'>
     <Nav/> 
     {cardEl}
    </div>
  )
}