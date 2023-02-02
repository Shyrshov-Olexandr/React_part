import React, {createContext, useState} from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);

    const logIn = (loginUser) =>{
        setUser(loginUser)
    }

    const logOut = () =>{
        setUser(null)
    }

    const value = {user, logIn, logOut}
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export {AuthProvider, AuthContext};