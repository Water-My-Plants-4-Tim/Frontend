import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import Plant from './components/Plant'

function App() {
  
  return (


    

    <Router>
      <div className="App">
        <Nav />
        {/* <Plant /> */}
        <Switch>

          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/'>
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
