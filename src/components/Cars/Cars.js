import React, {useEffect, useState} from 'react';
// import {carServace} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({cars, setUpdateCar}) => {

    return (
        <div>
            {cars.map(car=><Car key = {car.id} car = {car} setUpdateCar = {setUpdateCar}/>)}
        </div>
    );
};

export {Cars};