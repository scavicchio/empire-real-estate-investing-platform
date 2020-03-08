import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from '../Header/Header-underwriter';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody } from "shards-react";
class UnderwriterLaunch extends Component{
  render(){
    return (
      <div className="App">
          <Header />
          <div className="App-header3" style={{height:420}}>
            <h1 style={{marginLeft: -400, marginTop: -400,fontWeight: "bold",fontSize: 50, color: "white"}}>Underwrite and appraise property</h1>
            <h1 style={{marginLeft: -650, fontWeight: "bold",fontSize: 50, color: "white"}}>developments near you</h1>
            <Button href="/underwriter/add" theme="dark" style={{right:0, position:"absolute", marginRight: 165, marginTop:-50}}>
                Get Started
            </Button>
          </div>
          
          <div style={{paddingTop: 25, height:800, backgroundColor: "lightgrey"}}>
            <h2 style={{marginTop: 170, marginLeft: 50, marginBottom:50,fontWeight: "bold"}}>The process in 3 simple steps</h2>
            <Container className="dr-example-container">
              <Row>
                <Col>
                  <Card style={{height: 280}}>
                  <CardBody>
                    <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25}}>
                    Create an account.
                    </p>
                    <p >
                    To create an account, submit required personal information, bank information for payment, and your appraiser license.
                    </p>
                    <Button href="/underwriter/add" theme="dark" style={{right:0, position:"absolute", marginRight: 40, marginBottom: 25,marginTop: 20}}>
                        Get Started
                    </Button>
                  </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style={{height: 280}}>
                  <CardBody>
                    <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25}}>
                    Underwriter deals near you.
                    </p>
                    <p >
                    Once approved, you can browse live properties near you, for which you will be required to validate financial projections, perform a development walkthrough and interview the developer before approving or rejecting the project.
                    </p>
                  </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card style={{height: 280}}>
                  <CardBody>
                    <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25}}>
                    Receive payment for projects.
                    </p>
                    <p >
                    After completing your assignment, you will receive payment for your work instantly in the platform, which you can then cash out to your bank account.
                    </p>
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
export default UnderwriterLaunch;