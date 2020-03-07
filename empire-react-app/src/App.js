import React from 'react';
import logo from './logo.svg';

import { Alert } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          testing reaction
          
        </p>
        <div className="example">
        {/* <Button theme="success">Success</Button> */}
        </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function CardBodyTitleSubtitleExample() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
  );
}

export default CardBodyTitleSubtitleExample;
