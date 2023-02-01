import React, {useEffect, useState} from 'react';
import {postServise} from "../../services";

const PostDetails = ({postId, state}) => {
    const [post, setPost] = useState(null);

    useEffect(()=>{
        if (state){
            setPost({...state})
        } else {
            postServise.getById(postId).then(({data})=>setPost(data))
        }
    }, [postId])
    return (
        <div>
            {post &&
                <>
                    <div>id:{post.id}</div>
                    <div>userId:{post.userId}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.body}</div>
                </>
            }
        </div>
    );
};

export {PostDetails};