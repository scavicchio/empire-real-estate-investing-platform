import React, { Component } from 'react';
import axios from 'axios';


export default class CreateBuilding extends Component {
  constructor(props) {
    super(props);

    this.onChangeBuilding_name = this.onChangeBuilding_name.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeDeveloper_name = this.onChangeDeveloper_name.bind(this);
    this.onChangeCap_rate = this.onChangeCap_rate.bind(this);
    this.onChangeIrr = this.onChangeIrr.bind(this);
    this.onChangeAddress_1 = this.onChangeAddress_1.bind(this);
    this.onChangeZip_code = this.onChangeZip_code.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeProperty_type = this.onChangeProperty_type.bind(this);
    this.onChangeInvestment_strategy = this.Investment_strategy.bind(this);
    this.onChangeTargeted_average_cash_yield = this.onChangeTargeted_average_cash_yield.bind(this);
    this.onChangePicture_url = this.onChangePicture_url.bind(this);


    this.onSubmit = this.onSubmit.bind(this);

   
    this.state = {
      username: '',
      description: '',
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/building/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Building" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}