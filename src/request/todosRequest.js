import {requestLinks} from "./urls";
import {axiosRequest} from "../utils/axiosConfig";
export const  todosRequest = {
    getAll: () => axiosRequest.get(requestLinks.todos)
}