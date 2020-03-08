import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from '../Header/Header';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { StickyContainer, Sticky } from 'react-sticky';
import { Card, CardBody, CardImg, ListGroup, ListGroupItem } from "shards-react";
import { Link, animateScroll as scroll } from "react-scroll";


export default class LandingPage extends Component{
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
      
                  <Button href="/user/add" theme="dark" style={{right:0, position:"absolute", marginRight: 300, marginTop:100}}>
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
                  <h2 style={{marginTop: 150, marginLeft: 50, marginBottom:50}}>How our platform is better</h2>
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
      
                <div style={{paddingTop: 25, height:800}}>
                  <h2 style={{marginLeft: 50, marginBottom:50}}>Sample of Current Properties</h2>
                  <Container className="dr-example-container">
                    <Row>
                      <Col>
                        <Card>
                          <CardImg top src="https://images1.loopnet.com/i2/Qo72PTApBxjm8P8BRw54ek89kDhWfdBVAYRjKHcrf04/112/image.jpg" />
                            <CardBody>
                              <h3>Building name</h3>
                              <ListGroup>
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Value</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>$1MM</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Projected IRR</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>13.3%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Property Type</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Office</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Investment Strategy</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Value add</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Target Average Cash Yield</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>4.2%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
                              </ListGroup>
                            </CardBody>
                        </Card>
                      </Col>
      
                      <Col>
                      <Card>
                          <CardImg top src="https://images1.loopnet.com/i2/vtg885r-iD_SCdiGsoWVmH6RvHODzzgkEXl8GoAX4SE/112/image.jpg" />
                            <CardBody>
                              <h3>Building name</h3>
                              <ListGroup>
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Value</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>$1MM</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Projected IRR</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>13.3%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Property Type</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Office</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Investment Strategy</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Value add</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Target Average Cash Yield</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>4.2%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
                              </ListGroup>
                            </CardBody>
                        </Card>
                      </Col>
      
                      <Col>
                      <Card>
                          <CardImg top src="https://images1.loopnet.com/i2/eks8o5-6LFcta750CCvc07Dx2YVu6ER1_gh6vu4D8YA/112/image.jpg" />
                            <CardBody>
                              <h3>Building name</h3>
                              <ListGroup>
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Value</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>$1MM</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Projected IRR</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>13.3%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Property Type</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Office</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Investment Strategy</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Value add</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0}}>Target Average Cash Yield</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>4.2%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
                              </ListGroup>
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