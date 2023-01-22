import './App.css';
import {Simpsons} from "./components/Simpsons/Simpsons";

import React from 'react';
import {Characters} from "./components/Characters/Characters";

const App = () => {
    return (
        <div>
            <Simpsons/>
            <Characters/>
        </div>
    );
};

export {App};
