import axios from "axios";
import {axiosRequest} from "../utils/axiosConfig";
import {requestLinks} from "./urls";

export const commntsRequest = {
    getAll: () => axiosRequest.get(requestLinks.comments),
}