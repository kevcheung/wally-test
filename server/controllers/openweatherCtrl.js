const axios = require('axios');
const weatherKey = process.env.OPENWEATHER_KEY;

const getZip = (req, res, next) => {
    // console.log(req.params)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${req.params.searchTerm},us&units=imperial&appid=${weatherKey}`)
    //axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${weatherKey}`)
        .then(
            // response => console.log('WEATHER!!!!', response))
            response => res.status(200).json(response.data))
        .catch(err => {res.status(500).json(err)});
    };

const getName = (req, res, next) => {
    // console.log(req.params)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.searchTerm}&units=imperial&appid=${weatherKey}`)
    //axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherKey}`)
        .then(
            // response => console.log('WEATHER!!!!', response))
            response => res.status(200).json(response.data))
        .catch(err => {res.status(500).json(err)});
    };

const getWeather = (req, res, next) => {
    // console.log(req.params)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=75075&units=imperial&appid=${weatherKey}`)
    //axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherKey}`)
        .then(
            // response => console.log('WEATHER!!!!', response))
            response => res.status(200).json(response.data))
        .catch(err => {res.status(500).json(err)});
    };

module.exports = {
    getZip,
    getName,
    getWeather
}
