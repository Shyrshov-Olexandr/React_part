import {axiosRequest} from "../utils/axiosConfig";
import {requestLinks} from "./urls";

export const albumsRequest = {
    getAll: () => axiosRequest.get(requestLinks.albums),
}