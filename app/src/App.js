import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import Plant from './components/Plant'


export const PlantContext = createContext();
console.log("PlantContext", PlantContext)


const initialPlants = []
function App() {
  const [plants, setPlants] = useState(initialPlants)
  console.log("App -> plants", plants)

  return (
    

    <Router>
      <div className="App">
        <Nav />      
        <Switch>
          <PlantContext.Provider
            value={{ plants }}
          >
            <PrivateRoute exact path='/protected' component={Dashboard} />
          </PlantContext.Provider>

          <Route  path='/login' component={Login} />
          <Route path='/' component={Signup} />

        </Switch>
      </div>
    </Router>
  );

}

export default App;
