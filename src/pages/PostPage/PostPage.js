import React from 'react';
import {Posts} from "../../components";
import {Outlet} from "react-router-dom";
import css from './PostPage.module.css'

const PostPage = () => {
    return (
        <div className={css.PostPage}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostPage};