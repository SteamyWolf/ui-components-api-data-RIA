import React from 'react';
import './App.css';
import Amiibo from './Amiibo';
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

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className={classes.root}>
        <img className={classes.img} src="https://i.pinimg.com/originals/ed/96/e5/ed96e5b13349be8bec8cd09a7656c580.jpg" alt="Cool Link Picture"></img>
      </header>
     <Amiibo />
    </div>
  );
}

export default App;
