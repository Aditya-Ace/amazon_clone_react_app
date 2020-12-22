import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/checkout' exact>
            <Checkout />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
