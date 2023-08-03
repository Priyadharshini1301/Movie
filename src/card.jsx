import React from "react";

function Card(props) {
    return (
        <div className="card">
            <h2>Movie Name:{props.movname}</h2>
            <p>Released Year: {props.year}</p>
        </div>
    );
}

export default Card;