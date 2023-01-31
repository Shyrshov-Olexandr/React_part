import React from 'react';
import {axiosRequest} from "../utils/axiosConfig";

const postsRequest = {
    getPostById:(id) => axiosRequest.get(postsRequest.getPostById(id))
};

export {postsRequest};