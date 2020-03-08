import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from './Header/Header';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody } from "shards-react";
import { Link, animateScroll as scroll } from "react-scroll";
import { StickyContainer, Sticky } from 'react-sticky';




class App extends Component{

  render(){
    return (
      <div className="App">
          <Header />

          <div className="MainSection" style={{height:450}}>
            <h1 style={{marginTop: 130, marginLeft: 50}}>Democratizing Commercial </h1>
            <h1 style={{marginLeft: 50}}>Real Estate Investment</h1>

            <Link activeClass="active" className="test1" to="second" spy={true} smooth={true} duration={500} >
              <Button theme="secondary" style={{right:0, position:"absolute", marginRight: 150, marginTop:100}}>
                Learn More!
              </Button>
            </Link>

            <Button theme="dark" style={{right:0, position:"absolute", marginRight: 300, marginTop:100}}>
                Get Started
              </Button>
            
          </div>

          <div className="second" style={{paddingTop: 25, height:650, backgroundColor:'grey'}}>
            <h2 style={{marginTop: 150, marginLeft: 50}}>Whats Empire?</h2>
            <p style={{marginLeft: 50, maxWidth:500}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

          <div style={{paddingTop: 25, height:650, backgroundColor:'yellow'}}>
            <h2 style={{marginTop: 150, marginLeft: 50}}>Whats Commercial Real Estate?</h2>
            <p style={{marginLeft: 50, maxWidth:500}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

          <div style={{paddingTop: 25, height:650}}>
            <h2 style={{marginTop: 50, marginLeft: 50, marginBottom:50}}>How our platform is better</h2>
            <Container className="dr-example-container">
              <Row>
                <Col>
                  <Card>
                  <CardBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. </p>
                  </CardBody>
                  </Card>
                </Col>

                <Col>
                  <Card>
                  <CardBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. </p>
                  </CardBody>
                  </Card>
                </Col>

                <Col>
                  <Card>
                  <CardBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. </p>
                  </CardBody>
                  </Card>
                </Col>
              </Row>

            </Container>
          </div>
      </div>
      
    );
  }
}

export default App;