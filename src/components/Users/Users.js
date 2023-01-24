import React, {useEffect, useState} from 'react';
import {UserDetails} from "../User/UserDetails";
// import axios from "axios";
import {axiosService} from "../../services/axiosService";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axiosService.get('/users').then(value => value.data).then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            {
                users.map(user => <UserDetails key = {user.id} user = {user}/>)
            }
        </div>
    );
};

export {Users};