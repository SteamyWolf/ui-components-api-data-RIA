import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { useSignupFormContext } from '../contexts/SignupFormContext';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

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

    const signupFormContext = useSignupFormContext();

    return (
        <Formik
            initialValues={{ email: '', password: '', passwordMatch: '' }}
            validationSchema={yup.object().shape({
                email: yup.string()
                    .email('Must be a valid email')
                    .max(50)
                    .required('Required'),
                password: yup.string()
                    .max(50, 'Your password is too long')
                    .min(6, 'Password must be greater that 6 characters')
                    .required('Required'),
                passwordMatch: yup.string()
                    .max(50, 'Your password is too long')
                    .min(6, 'Password must be greater that 6 characters')
                    .required()
            })}
            onSubmit={(data, { resetForm }) => {
                signupFormContext.signup();
                resetForm();
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.innerDiv}>
                        <h2>Signup:</h2>
                        <p>Please enter your email and password</p>
                        <TextField
                            className={classes.textField}
                            variant="filled"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            label="Email"
                            helperText="Must be a valid email"
                            type="email"
                            error={Boolean(touched.email && errors.email)}
                            required
                        />
                        <TextField
                            className={classes.textField}
                            variant="filled"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur} name="password"
                            error={values.passwordMatch === values.password ? false : true}
                            label="Password" helperText="Password must match" type="password"
                            required
                        />
                        <TextField
                            className={classes.textField}
                            variant="filled"
                            value={values.passwordMatch}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="passwordMatch"
                            error={values.passwordMatch === values.password ? false : true}
                            label="Password-match"
                            helperText="Password must match"
                            type="password"
                            required />
                        <div className={classes.buttonDiv}>
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={Boolean(errors.email && errors.password && errors.passwordMatch) || values.email === '' || values.password === '' || values.passwordMatch === ''}
                                type="submit"
                                component={Link} to="/">
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