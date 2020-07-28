import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  
  return (


    

    <Router>
      <div className="App">
        <Nav />
        <Switch>

          <Route exact path='/' component={Login} />
          <Signup />

        </Switch>
      </div>
    </Router>
  );

}

export default App;
