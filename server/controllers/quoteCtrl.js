const axios = require('axios');

const getForsmatic = (req, res, next) => {
    axios.get(`http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en`)
        .then(
            // response => console.log('QUOTE!!!!', response))
            response => res.status(200).json(response.data))
        .catch(err => {res.status(500).json(err)})
};

const theySaid = (req, res, next) => {
    axios.get(`http://quotes.rest/qod.json`)
        .then(
            // response => console.log('QUOTE!!!!', response))
            response => res.status(200).json(response.data))
        .catch(err => {res.status(500).json(err)})
};

module.exports = {
    getForsmatic,
    theySaid
}