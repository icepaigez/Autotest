import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
   
  render() {
    return (
      <div className="app">
        Customer.io Test App
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <div className="btns">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link> 
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
