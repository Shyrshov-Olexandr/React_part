import React from 'react';

const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;
    return (
        <div>
            {id}) {name}
            <button onClick={()=>dispatch({type:'DELETE_DOG', payload:id})}>Delete</button>
        </div>
    );
};

export {Dog};