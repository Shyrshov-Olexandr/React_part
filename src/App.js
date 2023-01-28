import './App.css';
import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carServace} from "./services";

const App = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState([]);

    useEffect( () => {
        carServace.getAll().then(({data}) => setCars([...data]))
    }, [])
  return (
    <div className="App">
      <CarForm setCars = {setCars} updateCar = {updateCar}/>
      <hr/>
      <Cars cars = {cars} setUpdateCar = {setUpdateCar}/>
    </div>
  );
}

export {App};
