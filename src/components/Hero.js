import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 1200,
      margin: '0 auto',
    },
    img: {
      width: '100%'
    }
  });


const Hero = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <header className={classes.root}>
                <img className={classes.img} alt="The History of Link in all Games" src="https://i.pinimg.com/originals/ed/96/e5/ed96e5b13349be8bec8cd09a7656c580.jpg"></img>
            </header>
        </div>
    )
}

export default Hero;