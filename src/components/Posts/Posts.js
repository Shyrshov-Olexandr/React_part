import React, {useEffect, useState} from 'react';
import {postServise} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postServise.getAll().then(({data})=>setPosts([...data]))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key = {post.id} post = {post}/>)}
        </div>
    );
};

export {Posts};