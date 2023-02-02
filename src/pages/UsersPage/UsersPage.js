import React, {useContext} from 'react';
import {MyContext} from "../../index";

const UsersPage = () => {
    const context = useContext(MyContext);
    return (
        <div>
            <div>name : {context.name}</div>
            <div>age : {context.age}</div>
        </div>
    );
};

export {UsersPage};