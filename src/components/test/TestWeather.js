import React, { Component } from 'react';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';

class TestWeather extends Component {
    constructor(){
        super();
        this.state = {
            cityName: [],
            weather: [],
            temp: []
        }
        this.showWeather = this.showWeather.bind(this);
    }

showWeather = () => {
    axios.get("/api/getWeather")
        .then(response => {
            console.log('WEATHER!!!!', response)
            this.setState({
                cityName: [response.data.name],
                weather: [response.data.weather[0]],
                temp: [response.data.main.temp]
            })
        })
}

componentDidMount(){
    this.showWeather();
}

    render() {
        const weather = this.state.weather.map((resp, index) => {
            return (
                <div key = {index}>
                    <div>
                        <WeatherIcon obj = {resp}/>
                    </div>
                </div>
            )
        })
        // console.log(weather)
        return (
            <div>
                {this.state.cityName}
                {weather}
                {this.state.temp}
            </div>
        );
    }
}

export default TestWeather;