import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from '../Header/Header';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody,CardTitle, CardSubtitle, CardImg, ListGroup, ListGroupItem, Progress } from "shards-react";


export default class LandingPage extends Component{
    render(){
        return (
            <div className="App">
                <Header />

                <h1 style={{margin:40, textAlign: 'left'}}>Dashboard</h1>

                <Container className="dr-example-container">
                    <Row>
                        <Col>
                            <h5>In Progress</h5>
                            <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        <Button outline theme="dark">Download Detailed Report</Button>
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                    <ListGroup style={{width:275}}>
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0, textAlign: 'left'}}>Value</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>$1MM</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0, textAlign: 'left'}}>Projected IRR</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>13.3%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0, textAlign: 'left'}}>Property Type</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Office</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0, textAlign: 'left'}}>Investment Strategy</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>Value add</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
      
                                <ListGroupItem >
                                  <Container className="dr-example-container" style={{paddingLeft:0}}>
                                    <Row>
                                      <Col style={{paddingLeft:0, textAlign: 'left'}}>Target Average Cash Yield</Col>
                                      <Col style={{textAlign: 'right', paddingRight:0}}>4.2%</Col>
                                    </Row>
                                  </Container>
                                </ListGroupItem>
                              </ListGroup>
                                    </Col>
                                </Row>
                                    
                            </CardBody>
                        </Card>
                        </Col>
                        <Col>
                            <h5>Completed</h5>
                            
                            <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Approved ✅
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        
                                        Completion by: 
                                        4/11/20
                                        <br></br>
                                        <Button size="sm" theme="warning">Payment: Pending</Button>
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
                                        Approved ✅
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        
                                        Completion by: 
                                        4/11/20
                                        <br></br>
                                        <Button size="sm" theme="success">Payment: Completed</Button>
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
