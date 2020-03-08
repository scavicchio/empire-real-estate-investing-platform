import React from 'react';
import {Component} from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import backgroundImage from '../register_background.jpg';
import '../App.css';
//import { Alert } from "shards-react";
import { Form, FormInput, FormGroup } from "shards-react";
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
import "shards-ui/dist/css/shards.min.css"



export default class CreateUsers extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
        this.onChangeLast_name = this.onChangeLast_name.bind(this);
        this.onChangeAddress_1 = this.onChangeAddress_1.bind(this);
        this.onChangeZip_code = this.onChangeZip_code.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePhone_number = this.onChangePhone_number.bind(this);
        this.onChangeEmployeer = this.onChangeEmployeer.bind(this);
        this.onChangeCompany_role = this.onChangeCompany_role.bind(this);
        this.onChangeLicense = this.onChangeLicense.bind(this);
        
        

        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: '',
            
            password: '',
            first_name: '',
            last_name: '',
            address_1: '',
            zip_code: '',
            city: '',
            state: '',
            country: '',
            phone_number: '',
            employeer: '',
            company_role: '',
            license: '',
            user_type: 'Underwriter',
            


        }
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }

      onChangeFirst_name(e) {
        this.setState({
          first_name: e.target.value
        })
      }
      onChangeLast_name(e) {
        this.setState({
          last_name: e.target.value
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
      onChangePhone_number(e) {
        this.setState({
          phone_number: e.target.value
        })
      }
      onChangeEmployeer(e) {
        this.setState({
          employeer: e.target.value
        })
      }
      onChangeCompany_role(e) {
        this.setState({
          company_role: e.target.value
        })
      }
      onChangeLicense(e) {
        this.setState({
          license: e.target.value
        })
      }
      onChangeUser_type(e) {
        this.setState({
          user_type: "Underwriter"
        })
      }
      
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
            
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address_1: this.state.address_1,
            zip_code: this.state.zip_code,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            phone_number: this.state.phone_number,
            employeer: this.state.employeer,
            company_role: this.state.company_role,
            license: this.state.license,
            user_type: this.state.user_type,
        }
    
        //console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
    
        this.setState({
          username: '',
          password: '',
            first_name: '',
            last_name: '',
            address_1: '',
            zip_code: '',
            city: '',
            state: '',
            country: '',
            phone_number: '',
            employeer: '',
            company_role: '',
            license: '',
            user_type: ''
            

        })
      }



    render(){
        return(
            <div className="App" >
                
            <header className="App-header">
            <Card className="Card" style={{width: 500}}>
              <CardHeader style={{color: "black",backgroundColor: "white",textAlign: "left",height: 50}} >Register as an Underwriter</CardHeader>
              <CardBody style={{height: 580}}>
                <form >
                  <div>
                    <p style={{color: "black",fontSize: 15,position: "absolute",left: 1,paddingLeft: 30}}> Contact Information </p>
                  </div>
                  <div className="Div" style={{paddingTop: 20}}>
                    <FormGroup style={{height: 50,width: 500,marginRight: 25}}>
                      <FormInput id="#fname" placeholder="First Name" value={this.state.first_name} onChange={this.onChangeFirst_name}/>
                    </FormGroup>
                    <FormGroup style={{height: 50,width: 500}}>
                        <FormInput id="#lname" placeholder="Last Name" value={this.state.last_name} onChange={this.onChangeLast_name}/>
                    </FormGroup>
            </div>

            <div className="Div">
              <FormGroup style={{height: 50,width: 500,marginRight: 25}}>
                <FormInput id="#email" placeholder="Email" value={this.state.username} onChange={this.onChangeUsername}/>
              </FormGroup>
              <FormGroup style={{height: 50,width: 500}}>
                <FormInput id="#phone" placeholder="Phone Number" value={this.state.phone_number} onChange={this.onChangePhone_number}/>
              </FormGroup>
            </div>
            <div className="Div">
              <FormGroup style={{height: 50,width: 2000,marginRight: 0,marginBottm: 0}}>
                <FormInput type="password" id="#password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
              </FormGroup>
              
            </div>
            <FormGroup style={{height: 50}}>
              <FormInput id="#address" placeholder="Address" value={this.state.address_1} onChange={this.onChangeAddress_1}/>
            </FormGroup>
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
              <FormGroup style={{height: 50,width: 500,marginRight: 25,marginBottm: 0}}>
                <FormInput id="#country" placeholder="Country" value={this.state.country} onChange={this.onChangeCountry}/>
              </FormGroup>
              <FormGroup style={{height: 50,width: 500}}>
                <FormInput id="#ssn" placeholder="License" value={this.state.license} onChange={this.onChangeLicense}/>
              </FormGroup>
            </div>
            <div className="Div">
              <FormGroup style={{height: 50,width: 500,marginRight: 25,marginBottm: 0}}>
                <FormInput id="#employer" placeholder="Employer" value={this.state.employeer} onChange={this.onChangeEmployeer}/>
              </FormGroup>
                <FormGroup style={{height: 50,width: 500}}>
                <FormInput id="#company-role" placeholder="Company Role" value={this.state.company_role} onChange={this.onChangeCompany_role}/>
              </FormGroup>
            </div>
            
            
          
          <div className='Text'>
              <Button theme="dark" style={{position: "absolute", bottom: "1", right: "0", marginRight: 135}} type="cancel">Cancel</Button>
            <Button onClick={this.onSubmit} theme="dark" style={{position: "absolute", bottom: "1", right: "0", marginRight: 30}} >Register </Button>          
          </div>
          </form>
        </CardBody>
      </Card>
        
      </header>
    </div>
  );


        


    }

}