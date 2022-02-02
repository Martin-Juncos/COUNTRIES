import React from "react";


export default function Card ({flags, name, continents}) {
    return (
        <div>
        <div >
        <h2>{name}</h2>
        <img src = {flags} witdh="200px" height="200px" />
        <h3> Continent: {continents}</h3>
        </div>
        </div>
    )
}