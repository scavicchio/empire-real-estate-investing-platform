import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from '../Header/Header';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody,CardTitle, CardSubtitle, CardImg, ListGroup, ListGroupItem, Progress } from "shards-react";
import { Link, animateScroll as scroll } from "react-scroll";


export default class LandingPage extends Component{
    render(){
        return (
            <div className="App">
                <Header />
                <h1 style={{margin:40, textAlign: 'left'}}>Dashboard</h1>

                <Container className="dr-example-container" style={{marginTop:20, marginLeft:20}}>
                <Row>
                    <Col>
                        <h5>Submitted Development</h5>
                        <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Financial ❌
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        <Button size="sm" theme="danger">Underwriting: Not Started</Button>
                                        <br></br>
                                        Completion by: - - 
                                    </Col>
                                </Row>
                                    
                            </CardBody>
                        </Card>

                        <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Financial ✅
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        <Button size="sm" theme="warning">Underwriting: Pending</Button>
                                        <br></br>
                                        Completion by: 
                                        4/11/20
                                    </Col>
                                </Row>
                                   
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Financial ✅
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        <Button size="sm" theme="success">Underwriting: Completed</Button>
                                        <br></br>
                                        Completion by: 
                                        4/11/20
                                    </Col>
                                </Row>
                                   
                            </CardBody>
                        </Card>

                    </Col>
                    <Col>
                        <h5>Approved Development</h5>
                        <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Completion by: 
                                        4/11/20
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        Equity Raised: 50%
                                        <Progress theme="primary" value={50} />
                                        <br></br>
                                        Value:
                                        <h5>2.4M</h5>
                                    </Col>
                                </Row>
                                   
                            </CardBody>
                        </Card>

                        <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Completion by: 
                                        4/11/20
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        Equity Raised: 30%
                                        <Progress theme="primary" value={30} />
                                        <br></br>
                                        Value:
                                        <h5>2.4M</h5>
                                    </Col>
                                </Row>
                                    
                            </CardBody>
                        </Card>

                        <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Completion by: 
                                        4/11/20
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                    Equity Raised: 80%
                                        <Progress theme="primary" value={80} />
                                        <br></br>
                                        Value:
                                        <h5>2.4M</h5>
                                    </Col>
                                </Row>
                                   
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <h5>Funded Development</h5>
                        <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        <Button outline theme="dark">Financial</Button>
        
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        Value:
                                        <h5 style={{color:'green'}}>2.4M +</h5>
                                        <br></br>
                                        Trade Volume:
                                        <h5>42,069</h5>
                                    </Col>
                                </Row>
                                    
                            </CardBody>
                        </Card>
                    </Col>
        </Row>
                </Container>

            </div>
            
          );
      }
}
