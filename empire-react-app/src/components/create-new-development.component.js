import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
//import logo from './logo.svg';
import backgroundImage from '../register_background.jpg';
import '../App.css';
//import { Alert } from "shards-react";
import { Form, FormInput, FormGroup, Container, Row, Col } from "shards-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class CreateBuilding extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeBuilding_name = this.onChangeBuilding_name.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeDeveloper_name = this.onChangeDeveloper_name.bind(this);
        
        this.onChangeAddress_1 = this.onChangeAddress_1.bind(this);
        this.onChangeZip_code = this.onChangeZip_code.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeProperty_type = this.onChangeProperty_type.bind(this);
        this.onChangeInvestment_strategy = this.onChangeInvestment_strategy.bind(this);
        this.onChangePicture_url = this.onChangePicture_url.bind(this);
      

        
    //const cap_rate = req.body.cap_rate;
    //const irr = req.body.irr;
    //const targeted_average_cash_yield = req.body.targeted_average_cash_yield;
    
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          building_name: '',
          picture_url: '',
          developer_name:'',
          value: '',
          cap_rate: '',
          irr: '',
          address_1:'',
          zip_code:'',
          city: '',
          state: '',
          country: '',
          property_type: '',
          investment_strategy: '',
          targeted_average_cash_yield:''
        }
      }
    
      onChangeBuilding_name(e) {
        this.setState({
            building_name: e.target.value
        })
      }

      onChangeValue(e) {
        this.setState({
            value: e.target.value
        })
      }

      onChangeDeveloper_name(e) {
        this.setState({
            developer_name: e.target.value
        })
      }
      onChangeAddress_1(e) {
        this.setState({
          address_1: e.target.value
        })
      }
      onChangeZip_code(e) {
        this.setState({
          zip_code: e.target.value
        })
      }

      onChangeCity(e) {
        this.setState({
          city: e.target.value
        })
      }

      onChangeState(e) {
        this.setState({
          state: e.target.value
        })
      }
      onChangeCountry(e) {
        this.setState({
          country: e.target.value
        })
      }
      onChangeProperty_type(e) {
        this.setState({
            property_type: e.target.value
        })
      }
      onChangeInvestment_strategy(e) {
        this.setState({
            investment_strategy: e.target.value
        })
      }
      onChangePicture_url(e) {
        this.setState({
            picture_url: e.target.value
        })
      }
      
      
      onSubmit(e) {
        e.preventDefault();
    
        const building = {
            
            building_name: this.state.building_name,
            picture_url: this.state.picture_url,
            developer_name:this.state.developer_name,
            value: this.state.value,
            cap_rate: 4.6,
            irr: 9.4,
            address_1:this.state.address_1,
            zip_code:this.state.zip_code,
            city:this.state.zip_code,
            state:this.state.state,
            country:this.state.country,
            property_type: this.state.property_type,
            investment_strategy: this.state.investment_strategy,
            targeted_average_cash_yield: 2.4,
        }
    
        //console.log(user);
    
        axios.post('http://localhost:5000/buildings/add', building)
          .then(res => console.log(res.data));
    
        this.setState({
            building_name: '',
            picture_url: '',
            developer_name:'',
            value: '',
            cap_rate: '',
            irr: '',
            address_1:'',
            zip_code:'',
            city: '',
            state: '',
            country: '',
            property_type: '',
            investment_strategy: '',
            targeted_average_cash_yield:''
            

        })
      }

    render(){
        return(
            <div className="App" >
                <Header />
                
            <header className="App-header2">
            <Card className="Card" style={{width: 500}}>
              <CardHeader style={{color: "black",backgroundColor: "white",textAlign: "left",height: 50}} >Submit New Development</CardHeader>
              <CardBody style={{height: 580}}>
                <form >
                  <div>
                    <p style={{color: "black",fontSize: 15,position: "absolute",left: 1,paddingLeft: 30}}> Development Information </p>
                  </div>
                  <div className="Div" style={{paddingTop: 20}}>
                    <FormGroup style={{height: 50,width: 2000,marginRight: 0}}>
                      <FormInput id="#fname" placeholder="Building Name" value={this.state.building_name} onChange={this.onChangeBuilding_name}/>
                    </FormGroup>
                    
            </div>

            <div className="Div">
              <FormGroup style={{height: 50,width: 500,marginRight: 25}}>
                <FormInput id="#email" placeholder="Developer Name" value={this.state.developer_name} onChange={this.onChangeDeveloper_name}/>
              </FormGroup>
              <FormGroup style={{height: 50,width: 500}}>
                <FormInput id="#phone" placeholder="Value" value={this.state.value} onChange={this.onChangeValue}/>
              </FormGroup>
            </div>
            <div className="Div">
              <FormGroup style={{height: 50,width: 500,marginRight: 25,marginBottm: 0}}>
                <FormInput id="#country" placeholder="Property Type" value={this.state.property_type} onChange={this.onChangeProperty_type}/>
              </FormGroup>
              <FormGroup style={{height: 50,width: 500}}>
                <FormInput id="#ssn" placeholder="Investment Strategy" value={this.state.investment_strategy} onChange={this.onChangeInvestment_strategy}/>
              </FormGroup>
            </div>
            <div className="Div">
            <FormGroup style={{height: 50, width: 500, paddingRight:12}}>
              <FormInput id="#address" placeholder="Address" value={this.state.address_1} onChange={this.onChangeAddress_1}/>
            </FormGroup>
            <FormGroup style={{height: 50,width: 500,paddingRight: 0, paddingLeft:12}}>
                <FormInput id="#zip" placeholder="Country" value={this.state.country} onChange={this.onChangeCountry}/>
              </FormGroup>
            </div>
            <div className="Div">
              <FormGroup style={{height: 50,width: 500,marginRight: 25,marginBottm: 0}}>
                <FormInput id="#city" placeholder="City" value={this.state.city} onChange={this.onChangeCity}/>
              </FormGroup>
              <FormGroup style={{height: 50,width: 500,paddingRight: 25}}>
                <FormInput id="#zip" placeholder="Zip Code" value={this.state.zip_code} onChange={this.onChangeZip_code}/>
              </FormGroup>
              <FormGroup style={{height: 50,width: 500}}>
                <FormInput id="#state" placeholder="State" value={this.state.state} onChange={this.onChangeState}/>
              </FormGroup>
            </div>
            <div className="Div">
              <FormGroup style={{height: 50,width: 2000,marginRight: 0,marginBottm: 0}}>
                <FormInput id="#country" placeholder="Picture URL" value={this.state.picture_url} onChange={this.onChangePicture_url}/>
              </FormGroup>
              
            </div>
            <div className="Div" >
              
                <Button type="file" id="myFile" name="filename" >Choose File</Button>
              
            </div>
            
            
          
          <div className='Text'>
              <Button theme="dark" style={{position: "absolute", bottom: "1", right: "0", marginRight: 135}} type="cancel">Cancel</Button>
            <Button onClick={this.onSubmit} theme="dark" style={{position: "absolute", bottom: "1", right: "0", marginRight: 30}} >Create </Button>          
          </div>
          </form>
        </CardBody>
      </Card>

      
        
      </header>
      
    </div>

  );

    }

}