import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";
const Header = () => {
    const {user} = useAuthContext();
    return (
        <div className={css.Header}>
            <NavLink to={""}>
                Home
            </NavLink>
            <NavLink to={"users"}>
                Users
            </NavLink>
            <NavLink to={"posts"}>
                Posts
            </NavLink>
            <NavLink to={"about"}>
                About
            </NavLink>
            {user &&
                <div>
                    {user}<button>Logout</button>
                </div>}
        </div>
    );
};

export {Header};