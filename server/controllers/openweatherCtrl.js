const axios = require('axios');
const weatherKey = process.env.OPENWEATHER_KEY;

const getWeather = (req, res, next) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=75075&units=imperial&appid=${weatherKey}`)
        .then(
            // response => console.log('WEATHER!!!!', response))
            response => res.status(200).json(response.data))
        .catch(err => {res.status(500).json(err)});
    };

module.exports = {
    getWeather
}
