import React from "react"
//import fuji from ""

export default function Cards(props){
    return(
        <div className="card">
           <img src= {props.info.imageUrl} alt="pic"/>
           <div className="info">
             <p> <span> {props.info.location} </span>&nbsp;&nbsp; <a href={props.info.googleMapsUrl}target="_blank">View on google maps </a></p>
             <h2> {props.info.title}</h2>
             <h4> {props.info.startDate} - {props.info.endDate}</h4>
             <p> {props.info.description}</p>
           </div>
        </div>
    )
}