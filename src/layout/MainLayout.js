import React from 'react';
import {SideBar} from "../components/Header/SideBar";

const MainLayout = () => {
    return (
        <div className={'main-container'}>
            <SideBar/>
        </div>
    );
};

export {MainLayout};