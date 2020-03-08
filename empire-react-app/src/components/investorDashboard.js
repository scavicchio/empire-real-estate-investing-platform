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

                <h1 style={{margin:40, textAlign: 'left'}}>Account</h1>

                <Container className="dr-example-container">
                    <Row>
                        <Col>
                        <h4>Summary</h4>

                        <Card style={{marginBottom:20}}>
                            <CardBody style={{paddingLeft:20, textAlign: 'left'}}>
                                <h5>Balance Details:</h5>
                                <b>$12,345,678</b> | <b style={{color:'red'}}>$2,567 (-1.5%)</b>
                                <br></br>
                                <br></br>
                                <h5>Next Dividend:</h5>
                                <b>$XX,XXX,XXX</b>

                            </CardBody>
                        </Card>
                        </Col>
                        
                        <Col>
                            <h4>Positions</h4>

                            <Card style={{marginBottom:20}}>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign: 'left'}}>
                                        <CardTitle >Building</CardTitle>
                                        <CardSubtitle>The address</CardSubtitle>
                                        <br></br>
                                        Most Recent Value:<br></br>
                                        <b>$ 2,345</b> | (31.23 shares)
                                        <br></br>
                                        <br></br>
                                        <div style={{color:'red'}}>- $234.45 (- 3.34%)</div>
                                        <div style={{color:'red'}}>Change Since Purchase</div>
                                        

                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        <Button theme="success">Buy More</Button>
                                        <br></br>
                                        <br></br>
                                        <Button theme="danger">Sell</Button>
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
                                        Value:
                                        <h5 style={{color:'green'}}>2.4M +</h5>
                                    </Col>

                                    <Col style={{textAlign: 'right'}}>
                                        <Button theme="success">Buy More</Button>
                                        <br></br>
                                        <br></br>
                                        <Button theme="danger">Sell</Button>
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
