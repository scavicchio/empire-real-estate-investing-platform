import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Building = props =>(
    <tr>
        <td><img src={props.building.picture_url}/></td>
        <td> {props.building.building_name}</td>
        <td> {props.building.developer_name}</td>
        <td> {props.building.value}</td>
        <td> {props.building.cap_rate}</td>
        <td> {props.building.irr}</td>
        <td> {props.building.address_1}</td>
        <td> {props.building.zip_code}</td>
        <td> {props.building.city}</td>
        <td> {props.building.state}</td>
        <td> {props.building.country}</td>
        <td> {props.building.property_type}</td>
        <td> {props.building.investment_strategy}</td>
        <td> {props.building.targeted_average_cash_yield}</td>


    </tr>


);






export default class BuildingsList extends Component{

    constructor(props){

        super(props);

        this.state = {buildings: []};


    }

    componentDidMount(){
        axios.get('http://localhost:5000/buildings/')
            .then(response => {
                this.setState({buildings: response.data})

            })
            .catch((error) => {

                console.log(error);

            })




    }

    buildingsList(){

        return this.state.buildings.map(currentbuilding => {
            return <Building building = {currentbuilding} key={currentbuilding._id}/>;


        });


    }



    render(){
        return(
            <div>
                <p> This is the buildings list Component </p>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th> building_name</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.buildingsList() }
                    </tbody>
                </table>        



            </div>



        )


    }

}