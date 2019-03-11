import React from 'react'
import './StarWars.css'

const Card = props => {
    return (
    <div className='card'>
        <h2>Name: {props.eachName}</h2>
        <div>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair-Color: {props.hair}</p>
            <p>Skin-Color: {props.skin}</p>
            <p>Birth-Year: {props.year}</p>
        </div>
    </div>
    )
}

export default Card