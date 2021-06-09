import React from 'react';

const Recipe = ({calories, title, image}) =>{
    return (
        <div className="card">
            <img src={image} alt="food" />
            <h2>{title}</h2>
            <p>{calories} calories</p>
        </div>
    )
}
export default Recipe;