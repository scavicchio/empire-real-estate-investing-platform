
import { BrowserRouter as Router, Route } from 'react-router-dom'

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from './Header/Header';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody, CardImg, ListGroup, ListGroupItem } from "shards-react";
import { Link, animateScroll as scroll } from "react-scroll";

import CreateDeveloper from "./components/create-developer.component";
import CreateUnderwriter from "./components/create-underwriter.component";
import CreateUser from "./components/create-user.component";
import UsersList from "./components/users-list-component.js";

import NewDevelopment from "./components/create-new-development.component";

import DeveloperLaunch from "./components/developer-launch-page.component";
import UnderwriterLaunch from "./components/underwriter-launch-page";

import BuildingsList from "./components/buildings-list.component";
//import CreateBuilding from "./components/create-building.component";
import LandingPage from './components/landing-page.component';


import InvestorDashboard from './components/investorDashboard';
import UnderwriterDashboard from './components/underwriterDashboard';
import DeveloperDashboard from './components/developer-dashboard';


class App extends Component{

  render(){
    return (

      
       <Router>
        <Route path='/user/' exact component={UsersList} />

        <Route path='/buildings/add' exact component={NewDevelopment} />
        <Route path='/user/add' exact component={CreateUser} />
        <Route path='/' exact component={LandingPage} />
        <Route path='/developer/add' exact component={CreateDeveloper} />
        <Route path='/underwriter/add' exact component={CreateUnderwriter} />

        <Route path='/underwriter/home' exact component={UnderwriterLaunch} />
        <Route path='/developer/home' exact component={DeveloperLaunch} />

        <Route path='/buildings' exact component={BuildingsList} />


        <Route path='/developer/dashboard' exact component={DeveloperDashboard} />
        <Route path='/underwriter/dashboard' exact component={UnderwriterDashboard} />
        <Route path='/user/dashboard' exact component={InvestorDashboard} />
        
        


      </Router>

      
      
    )
  }
}

export default App;