import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Nav />
      <Signup />
      <Login />
      
    </div>
  );
}

export default App;
