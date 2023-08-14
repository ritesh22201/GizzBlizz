import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        let loginToken = JSON.parse(localStorage.getItem('pr-token')) || '';
        if(loginToken){
            setIsAuth(true)
        }
        else{
            setIsAuth(false);
        }
    }, [isAuth])

    return <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
    </AuthContext.Provider>
}


export default AuthContextProvider;
