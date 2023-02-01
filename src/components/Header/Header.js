import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
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
        </div>
    );
};

export {Header};