import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import Navbar from "./components/navbar.component";
import UsersList from "./components/users-list-component.js";
import CreateUser from "./components/create-user.component";

import CreateDeveloper from "./components/create-developer.component";
import CreateUnderwriter from "./components/create-underwriter.component";

import BuildingsList from "./components/buildings-list.component";
import CreateBuilding from "./components/create-building.component";

function App() {
  return (
    
    <Router>
        
        <br/>

        <Route path='/user/' exact component={UsersList} />
        <Route path='/user/add' exact component={CreateUser} />
        
        <Route path='/developer/add' exact component={CreateDeveloper} />
        <Route path='/underwriter/add' exact component={CreateUnderwriter} />

        <Route path='/buildings' exact component={BuildingsList} />
        <Route path='/buildings/add' exact component={CreateBuilding} />
        


      </Router>



  );
}

export default App;
