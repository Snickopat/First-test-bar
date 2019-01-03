import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Bars from './comp/Bars';
import AddBar from './comp/AddBar';
import OneDeals from './comp/OneDeal';
import {Navbar} from 'react-bootstrap'
import {NavItem} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'




class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
        <div>
        <Navbar className="navbarbg">
          <Navbar.Header>
           <Navbar.Brand>
              My TLV  bar web
          </Navbar.Brand>
          </Navbar.Header>
          <Nav >
            <NavItem  >
            <Link  to="/home">Home</Link>
            </NavItem>
            <NavItem  >
            <Link  to="/addbar">Add Bar</Link>
            </NavItem>
            <NavItem >
            <Link  to="/allbars">All Bars</Link>
            </NavItem>
          </Nav>
        </Navbar>;
       </div>
     
       <div className="container">
         <Switch>
              <Route exact path="/" />
              <Route path="/home" />
              <Route path="/bars/" component={Bars} />
              <Route path="/addbar/" component={AddBar} />
         </Switch>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
