import './App.css';
import {Cats, Dogs} from "./components";
import {useReducer, useRef} from "react";

const reduser = (state, action) => {
    switch (action.type){
        case 'ADD_CAT':
            const [lastCat] = state.cats.splice(-1);
            const catId = lastCat?lastCat.id+1:0;
            return {...state, cats:[...state.cats, {id:catId, name:action.payload}]}
        case 'DELETE_CAT':
            const catIndex = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(catIndex, 1)
            return {...state}
        case 'ADD_DOG':
            const [lastDog] = state.dogs.splice(-1);
            const dogId = lastDog?lastDog.id+1:0;
            return {...state, dogs:[...state.dogs, {id:dogId, name:action.payload}]}
        case 'DELETE_DOG':
            const dogIndex = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(dogIndex, 1)
            return {...state}
        default:
            return {...state}
    }
}
const App = () => {
    const catInp = useRef();
    const dogInp = useRef();
    const [state, dispatch] = useReducer(reduser, {cats:[], dogs:[]},(data) => data);

    const createDog = () => {
        dispatch({type:'ADD_DOG', payload:dogInp.current.value})
        dogInp.current.value = ''
    };

    const createCat = () => {
        dispatch({type:'ADD_CAT', payload:catInp.current.value})
        catInp.current.value = ''
    };

    return (
    <div className="App">
        <div>
            <input type="text" ref={catInp}/>
            <button onClick={createCat}>Create Cat</button>
            <Cats cats = {state.cats} dispatch = {dispatch}/>
        </div>
        <div>
            <input type="text" ref={dogInp}/>
            <button onClick={createDog}>Create Dog</button>
            <Dogs dogs = {state.dogs} dispatch = {dispatch}/>
        </div>
    </div>
  );
}

export {App};
