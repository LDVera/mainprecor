import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './pages'
import Products from './pages/products'



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Products" component={Products} exact />
      </Switch>
    </Router>
  );
}

export default App;
