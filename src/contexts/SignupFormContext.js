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
        console.log('contextSignup', signupForm)
    }, [props.email, props.password, props.passwordMatch])

    return (
        <SignupFormContext.Provider value={signupForm}>
            {props.children}
        </SignupFormContext.Provider>
    )
}

export const useSignupFormContext = () => useContext(SignupFormContext);

