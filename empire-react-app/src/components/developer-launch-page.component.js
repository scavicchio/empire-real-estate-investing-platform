import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from '../Header/Header-developer';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody } from "shards-react";

class DeveloperLaunch extends Component{
    render(){
      return (
        <div className="App">
            <Header />
            <div style={{height:450}}>
              
              <h1 style={{marginLeft: 50, marginTop: 130,fontWeight: "bold", fontSize: 50}}>Simplifying Equity Raising</h1>
              <p style={{marginLeft: 135, maxWidth:1000,color: "black", fontSize: 24,marginBottom: 70}}>
              Raise finance for equity-only properties
              </p>
              <Button href= "/developer/add" theme="dark" style={{right:0, position:"absolute", marginTop:-60, marginRight: 165 }}>
                  Get Started
              </Button>
              <Container style={{}}>
                <Card style={{}}>
                  <CardBody style={{border: 0}}>
                    <div className="App-header">
                    <h2 style={{ marginLeft: 50, fontSize: 25, fontWeight: "bold",marginTop: -560}}>Why equity only?</h2>
                    <p style={{marginLeft: 50, maxWidth:600, fontSize: 24,color: "black", marginTop: 10}}>
                    Equity-only means you get to market faster, as you only have one round of underwriting.
                    In addition to being faster, having one round of underwriting also decreases your underwriting costs.
                    </p>
                    </div>
                  </CardBody>
                </Card>
              </Container>
              
            </div>
            <div style={{height: 150, width: 1440,background:"linear-gradient(white,lightgrey)"}}>
            </div>
            <div style={{paddingTop: 25, height:1100, backgroundColor: "lightgrey"}}>
              <h2 style={{marginTop: 480, marginLeft: 50, marginBottom:50,fontWeight: "bold"}}>The process in 3 simple steps</h2>
              <Container className="dr-example-container">
                <Row>
                  <Col>
                    <Card style={{height: 355}}>
                    <CardBody>
                      <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25}}>
                      Create an account and submit your development.
                      </p>
                      <p >
                      Submit required personal information and your total investable assets.
                      Once approved, you will then be able to submit development requests, which require financial projections, property pictures and business plan pitch.
                      </p>
                      <Button href= "/developer/add" theme="dark" style={{right:0, position:"absolute", marginTop:-10, marginRight: 35 }}>
                        Get Started
                      </Button>
                    </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{height: 355}}>
                    <CardBody>
                      <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25}}>
                      Get your project approved by a licensed Underwriter.
                      </p>
                      <p >
                      A certified underwriter on our platform will then review your financial projections,
                      perform a property walkthrough and interview you. They will then be in a position to accept or reject your proposal.
                      </p>
                    </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{height: 355}}>
                    <CardBody>
                      <p style={{color: "black", fontSize: 20,fontWeight: "bold",marginBottom: 25}}>
                        Raise equity through our crowdfunding platform.
                      </p>
                      <p >
                      Once approved, your property will be listed on our platform, allowing 100K+ investors invest into the development.
                      If your property gets fully funded before the end of the initial offering period, we will then transfer the funds to you to undertake your project.
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
  export default DeveloperLaunch;