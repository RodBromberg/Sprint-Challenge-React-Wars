import React from "react";
import Card from "./Card";
import './StarWars.css'

const CardList = props => {
    return (
       <div className="cardList">
       {props.card.map( elem => {
           return (
            <Card 
            key={elem.edited}
            eachName={elem.name}
            height={elem.height}
            mass={elem.mass}
            hair={elem.hair_color}
            skin={elem.skin_color}
            year={elem.birth_year}

               />
           )
       })}
       </div>
    )
}



 export default CardList; 