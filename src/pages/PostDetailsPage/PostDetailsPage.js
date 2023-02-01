import React from 'react';
import {PostDetails} from "../../components";
import {useLocation, useParams} from "react-router-dom";

const PostDetailsPage = () => {

    const {postId} = useParams();
    const {state} = useLocation();

    return (
        <div>
            <PostDetails postId={postId} state = {state}/>
        </div>
    );
};

export {PostDetailsPage};