import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { AmiiboContextProvider } from './contexts/AmiiboContext';
import Toolbar from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Hero from './components/Hero';
import Amiibo from './components/Amiibo';

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
    <AmiiboContextProvider>
      <Hero />
      <Toolbar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/' exact component={Amiibo} />
        </Switch>
    </AmiiboContextProvider>
  );
}

export default App;
