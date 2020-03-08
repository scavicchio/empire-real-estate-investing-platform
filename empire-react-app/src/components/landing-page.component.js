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
      
                <div className="MainSection" style={{height:330}}>
                  <h1 style={{marginTop: 130, marginLeft: 50,fontWeight:"bold",fontSize: 60}}>Democratizing Commercial </h1>
                  <h1 style={{marginLeft: -98,fontWeight:"bold",fontSize: 60}}>Real Estate Investment</h1>
      
                  <Link activeClass="active" className="test1" to="second" spy={true} smooth={true} duration={500} >
                    <Button theme="dark" style={{right:0, position:"absolute", marginRight: 100, marginTop:70}}>
                      Learn More!
                    </Button>
                  </Link>
                  <Button href="/user/add" theme="dark" style={{right:0, position:"absolute", marginRight: 250, marginTop:70}}>
                    Get Started
                  </Button>
                  
                </div>
                <div id='gradient' style={{height: 500, width: 1440, marginTop: -160}}>
                </div>

                <div className="second" style={{paddingTop: 25, height:650, backgroundColor:'lightgrey',alignContent: "cente"}}>
                  <h2 style={{marginTop: 150, marginLeft: 50, fontWeight: "bold"}}>Whats Empire?</h2>
                  <p style={{maxWidth:500, marginLeft: 500, fontSize: 24}}>
                  Empire is a real estate investment platform, connecting investors with developers. Developers are screened by independent, licensed real estate underwriters in our platform, insuring you get high quality investment opportunities.
                  </p>
                </div>
      
                <div style={{paddingTop: 25, height:500, backgroundColor:'lightgrey'}}>
                  <h2 style={{marginTop: 150, marginLeft: 50, fontWeight: "bold"}}>Why Commercial Real Estate?</h2>
                  <p style={{maxWidth:600, marginLeft: 450,  fontSize: 24}}>
                  Commercial real estate allows you to diversify your investments, providing consistent cash flow and long-term growth un-correlated to the public markets
                  </p>
                </div>

                <div style={{height: 200, width: 1440,background: "linear-gradient(lightgrey,white)"}}>
                </div>

                <div style={{paddingTop: 25, height:650}}>
                  <h2 style={{marginTop: 50, marginLeft: 50, marginBottom:50, fontWeight:"bold"}}>How our platform is different</h2>
                  <Container className="dr-example-container">
                    <Row>
                      <Col>
                        <Card>
                        <CardBody>
                          <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25, height: 60}}>
                          Equity-only
                          </p>
                          <p >
                          Unlike typical real estate investment deals which mix both debt and equity, Empire is tailored to equity-only developments.
<p></p><p><b>Why is that?</b></p>
For each financial instrument in the capital stack, underwriting must be performed. The more underwriting, the higher the underwriting costs become. In simpler terms, equity-only deals mean that more money stays in your pocket.
                          </p>
                        </CardBody>
                        </Card>
                      </Col>
      
                      <Col>
                        <Card>
                        <CardBody style={{ height: 465}}>
                          <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25, height: 60}}>
                          Independent, licensed underwriters                          
                          </p>
                          <p >
                          Independent, licensed underwriters review the investment opportunities to provide their expert assessment of the development. Only approved projects make it onto the platform for you to invest in, guaranteeing quality projects.
                          </p>
                        </CardBody>
                        </Card>
                      </Col>
      
                      <Col>
                        <Card>
                        <CardBody style={{ height: 465}}>
                          <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25, height: 60}}>
                            Liquidity
                          </p>
                          <p >
                          Unlike regular real estate which locks assets for multiple years, Empire offers a secondary trading market, which allows for investors to buy and sell portions of already funded real estate developments.
                          </p>
                        </CardBody>
                        </Card>
                      </Col>
                    </Row>
      
                  </Container>
                </div>
      
                <div style={{paddingTop: 25, height:800}}>
                <h2 style={{marginTop: 50, marginLeft: 50, marginBottom:50, fontWeight:"bold"}}>Sample Properties</h2>
            <Container className="dr-example-container">
                <Row>
                <Col>
                    <Card>
                    <CardImg top src="https://images1.loopnet.com/i2/Qo72PTApBxjm8P8BRw54ek89kDhWfdBVAYRjKHcrf04/112/image.jpg" style={{height:233.3,width: 352}}/>
                        <CardBody style={{height: 430}}>
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
                                <CardBody style={{height: 430}}>
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
                                <CardBody style={{height: 430}}>
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

                    <p style={{height:150}}></p>
            </div>

            
            
          );
      }






}