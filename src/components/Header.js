import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    button: {
        textDecoration: 'none',
        color: 'white'
    }
}));



const Header = (props) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">
                            <Link to="/login" className={classes.button}>Login</Link>
                    </Button>
                    <Button color="primary">
                            <Link to="/signup" className={classes.button}>Signup</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;