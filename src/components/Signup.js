import { Button, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    main: {
    },
    form: {
        margin: '0 auto',
        maxWidth: 400,
    },
    innerDiv: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 0 30px'
    },
    buttonDiv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textField: {
        marginBottom: 10,
    }
})

const Signup = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordMatch: ''
    });

    return (
        <Formik initialValues={{ ...formData }} onSubmit={(data, { resetForm }) => {
            console.log(data)
            setFormData({
                email: data.email,
                password: data.password,
                passwordMatch: data.passwordMatch
            })
            console.log(formData)
            resetForm();
            }}>
            {({ values, handleChange, handleBlur, handleSubmit }) => (
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.innerDiv}>
                        <h2>Signup:</h2>
                        <p>Please enter you email and password</p>
                        <TextField className={classes.textField} value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" label="Email" helperText="Must be a valid email" type="email" required/>
                        <TextField className={classes.textField} value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" error={values.passwordMatch === values.password ? false : true} label="Password" helperText="Password must match" type="password" required/>
                        <TextField className={classes.textField} value={values.passwordMatch} onChange={handleChange} onBlur={handleBlur} name="passwordMatch" error={values.passwordMatch === values.password ? false : true} label="Password-match" helperText="Password must match" type="password" required/>
                        <div className={classes.buttonDiv}>
                            <Button color="primary" variant="contained" disabled={values.passwordMatch === values.password ? false : true || values.password === '' ? true : false || values.passwordMatch === '' ? true : false || values.email === '' ? true : false} type="submit" >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default Signup;