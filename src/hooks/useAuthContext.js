import {useContext} from "react";
import {AuthContext} from "../hot/AuthProvider";

const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
}