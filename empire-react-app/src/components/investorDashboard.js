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
            

            <h2 style={{paddingLeft: 50,paddingTop: 50,fontWeight: "bold",fontSize: 50}}>
            MarketPlace 
            </h2>
            <p style={{paddingLeft: 50,paddingTop:25,fontSize: 24}}>
            New Developments 
            </p>
            <div style={{paddingTop: 25, height:750}}>
            <Container className="dr-example-container">
                <Row>
                <Col>
                    <Card>
                    <CardImg top src="https://images1.loopnet.com/i2/Qo72PTApBxjm8P8BRw54ek89kDhWfdBVAYRjKHcrf04/112/image.jpg" style={{height:233.3,width: 352}}/>
                        <CardBody style={{height: 480}}>
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
                                    <Button theme="dark" style={{position: "absolute", right: 0, marginRight: 30, marginTop: 10}}>
                                    Invest >
                                    </Button>
                                </CardBody>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <CardImg top src="https://images1.loopnet.com/i2/vtg885r-iD_SCdiGsoWVmH6RvHODzzgkEXl8GoAX4SE/112/image.jpg" />
                                <CardBody style={{height: 480}}>
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
                                    <Button theme="dark" style={{position: "absolute", right: 0, marginRight: 30, marginTop: 10}}>
                                    Invest >
                                    </Button>
                                </CardBody>
                                
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <CardImg top src="https://images1.loopnet.com/i2/eks8o5-6LFcta750CCvc07Dx2YVu6ER1_gh6vu4D8YA/112/image.jpg" />
                                <CardBody style={{height: 480}}>
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
                                    <Button theme="dark" style={{position: "absolute", right: 0, marginRight: 30, marginTop: 10}}>
                                    Invest >
                                    </Button>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                    <Button theme="light" outline="flase" style={{position: "absolute", right: 0, marginRight: 195, marginTop: 40,  backgroundColor: "white"}}>
                    More >
                    </Button>
                    <p style={{paddingLeft: 50,paddingTop:25,fontSize: 24}}>Secondary Markets</p>
                        
                        
                    <div style={{paddingTop: 25, height:750}}>
                        <Container className="dr-example-container">
                        <Row>
                            <Col>
                            <Card>
                                <CardImg top src="https://images1.loopnet.com/i2/Qo72PTApBxjm8P8BRw54ek89kDhWfdBVAYRjKHcrf04/112/image.jpg" style={{height:233.3,width: 352}}/>
                                <CardBody style={{height: 505}}>
                                    <h3>Building name</h3>
                                    <ListGroup>
                                    <ListGroupItem >
                                        <Container className="dr-example-container" style={{paddingLeft:0}}>
                                        <Row>
                                            <Col style={{paddingLeft:0}}>Cost Basis Value</Col>
                                            <Col style={{textAlign: 'right', paddingRight:0}}>$1MM</Col>
                                        </Row>
                                        </Container>
                                    </ListGroupItem>

                                    <ListGroupItem >
                                        <Container className="dr-example-container" style={{paddingLeft:0}}>
                                        <Row>
                                            <Col style={{paddingLeft:0}}>Current Value</Col>
                                            <Col style={{textAlign: 'right', paddingRight:0}}>$1.1MM</Col>
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
                                    <Button theme="dark" style={{position: "absolute", right: 0, marginRight: 30, marginTop: 10}}>
                                    Invest >
                                    </Button>
                                </CardBody>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <CardImg top src="https://images1.loopnet.com/i2/vtg885r-iD_SCdiGsoWVmH6RvHODzzgkEXl8GoAX4SE/112/image.jpg" />
                                <CardBody style={{height: 505}}>
                                    <h3>Building name</h3>
                                    <ListGroup>
                                    <ListGroupItem >
                                        <Container className="dr-example-container" style={{paddingLeft:0}}>
                                        <Row>
                                            <Col style={{paddingLeft:0}}>Cost Basis Value</Col>
                                            <Col style={{textAlign: 'right', paddingRight:0}}>$1MM</Col>
                                        </Row>
                                        </Container>
                                    </ListGroupItem>

                                    <ListGroupItem >
                                        <Container className="dr-example-container" style={{paddingLeft:0}}>
                                        <Row>
                                            <Col style={{paddingLeft:0}}>Current Value</Col>
                                            <Col style={{textAlign: 'right', paddingRight:0}}>1.2MM</Col>
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
                                    <Button theme="dark" style={{position: "absolute", right: 0, marginRight: 30, marginTop: 10}}>
                                    Invest >
                                    </Button>
                                </CardBody>
                                
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <CardImg top src="https://images1.loopnet.com/i2/eks8o5-6LFcta750CCvc07Dx2YVu6ER1_gh6vu4D8YA/112/image.jpg" />
                                <CardBody style={{height: 505}}>
                                    <h3>Building name</h3>
                                    <ListGroup>
                                    <ListGroupItem >
                                        <Container className="dr-example-container" style={{paddingLeft:0}}>
                                        <Row>
                                            <Col style={{paddingLeft:0}}>Cost Basis Value</Col>
                                            <Col style={{textAlign: 'right', paddingRight:0}}>$1MM</Col>
                                        </Row>
                                        </Container>
                                    </ListGroupItem>

                                    <ListGroupItem >
                                        <Container className="dr-example-container" style={{paddingLeft:0}}>
                                        <Row>
                                            <Col style={{paddingLeft:0}}>Current Value</Col>
                                            <Col style={{textAlign: 'right', paddingRight:0}}>1.3MM</Col>
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
                                        <Button theme="dark" style={{position: "absolute", right: 0, marginRight: 30, marginTop: 10}}>
                                        Invest >
                                        </Button>
                                        </CardBody>
                                        </Card>
                                        </Col>
                                        </Row>
                                        </Container>
                                        </div>
                                        <Button theme="light" outline="flase" style={{position: "absolute", right: 0, marginRight: 195, marginTop: 65, marginBottom: 200,  backgroundColor: "white"}}>
                                        More >
                                        </Button>


                                        </div>
            
          );
      }
}
