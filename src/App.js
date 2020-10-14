import React from 'react';
import './App.css';
import { AmiiboContextProvider } from './contexts/AmiiboContext';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Hero from './components/Hero';
import Amiibo from './components/Amiibo';

function App() {
  return (
    <AmiiboContextProvider>
      <Header />
      <Hero />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/' exact component={Amiibo} />
        </Switch>
    </AmiiboContextProvider>
  );
}

export default App;
