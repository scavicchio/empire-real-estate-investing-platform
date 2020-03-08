
import { BrowserRouter as Router, Route } from 'react-router-dom'

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from './Header/Header';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody, CardImg, ListGroup, ListGroupItem } from "shards-react";
import { Link, animateScroll as scroll } from "react-scroll";



import NewDevelopment from "./components/create-new-development.component";

import DeveloperLaunch from "./components/developer-launch-page.component";
import UnderwriterLaunch from "./components/underwriter-launch-page";

import BuildingsList from "./components/buildings-list.component";
//import CreateBuilding from "./components/create-building.component";
import LandingPage from './components/landing-page.component';



class App extends Component{

  render(){
    return (

      
       <Router>
        
        <br/>

        <Route path='/user/' exact component={UsersList} />

        <Route path='/buildings/add' exact component={NewDevelopment} />
        <Route path='/user/add' exact component={CreateUser} />
        <Route path='/' exact component={LandingPage} />
        <Route path='/developer/add' exact component={CreateDeveloper} />
        <Route path='/underwriter/add' exact component={CreateUnderwriter} />

        <Route path='/underwriter/home' exact component={UnderwriterLaunch} />
        <Route path='/developer/home' exact component={DeveloperLaunch} />

        <Route path='/buildings' exact component={BuildingsList} />
        
        


      </Router>

      
      
    )
  }
}

export default App;