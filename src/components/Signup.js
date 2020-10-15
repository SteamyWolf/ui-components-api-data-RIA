import { Button, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { useSignupFormContext } from '../contexts/SignupFormContext';


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
    let formInfo;

    const formData = useSignupFormContext(formInfo);
    
    return (
        <Formik initialValues={{ ...formData }} onSubmit={(data, { resetForm }) => {
            formInfo = data
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