import React from 'react';

const Car = ({car, setUpdateCar}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button>Delete</button>
        </div>
    );
};

export {Car};