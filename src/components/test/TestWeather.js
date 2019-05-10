import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getZip, getName } from '../../ducks/weatherReducer';
import WeatherIcon from './WeatherIcon';

class TestWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

handleSearch = e => {
    this.setState({
        searchTerm: e.target.value
    });
}

submitSearch = e => {
    if(e.key === "Enter"){
        this.props.getZip(this.state.searchTerm);
        this.props.getName(this.state.searchTerm);
    }
}

    render() {
        console.log("PROPS!!!", this.props)
        // console.log("STATE!!!",this.state.searchTerm)
        // console.log(typeof parseInt(this.state.searchTerm))

        let weatherIcon = this.props.weather.weatherResult.weather && this.props.weather.weatherResult.weather.map((resp, i) => {
            // console.log('resp', resp);
            return (
                <WeatherIcon obj = {resp} key = {i}/>
            )
        });
        return (
            <div>
                <input
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                    placeholder="City or Zip Code"
                    onKeyPress={e => this.submitSearch(e)}
                    />
                {this.props.weather.weatherResult.main && 
                    <div>
                        <p>{this.props.weather.weatherResult.name}</p>
                        <p>{this.props.weather.weatherResult.main.temp}</p>
                        {weatherIcon}
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getZip, getName})(TestWeather);