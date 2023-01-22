import React from "react";

const Character = ({character}) => {
    const {name, species, gender, image} = character;
    return (
        <div>
            <div>name: {name}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};