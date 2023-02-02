import React, {useContext, useRef} from 'react';
import {AuthContext} from "../../hot/AuthProvider";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const username = useRef();
    const {logIn} = useAuthContext();
    useContext(AuthContext)
    const navigate = useNavigate();
    const {state} = useLocation();

    const login = () =>{
       logIn(username.current.value);
       navigate(state.pathname, {replace: true})
    }
    return (
        <div>
            <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {LoginPage};