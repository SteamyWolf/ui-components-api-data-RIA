import React, { createContext, useContext, useState } from 'react';

const SignupFormContext = createContext({
    authenticated: false,
    signup: () => {}
})

export const SignupFormContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signupHandler = () => {
        setIsAuthenticated(true);
    }

    return (
        <SignupFormContext.Provider value={{
            authenticated: isAuthenticated,
            signup: signupHandler
        }}>
            {props.children}
        </SignupFormContext.Provider>
    )
}

export const useSignupFormContext = () => useContext(SignupFormContext);

