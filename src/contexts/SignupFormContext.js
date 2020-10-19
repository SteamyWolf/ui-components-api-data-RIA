import React, { createContext, useContext, useEffect, useState } from 'react';

const SignupFormContext = createContext({
    email: '',
    password: '',
    passwordMatch: ''
})

export const SignupFormContextProvider = (props) => {
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        passwordMatch: ''
    })

    useEffect(() => {
        setSignupForm({
            email: props.email,
            password: props.password,
            passwordMatch: props.passwordMatch
        })
    }, [props.email, props.password, props.passwordMatch, signupForm.email, signupForm.password, signupForm.passwordMatch])

    return (
        <SignupFormContext.Provider value={signupForm}>
            {props.children}
        </SignupFormContext.Provider>
    )
}

export const useSignupFormContext = () => useContext(SignupFormContext);

