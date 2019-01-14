const axios = require('axios');
const access_id = process.env.UNSPLASH_ACCESS;
const secret_id = process.env.UNSPLASH_SECRET;

const getWalls = (req, res, next) => {
    // console.log(access_id)
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${access_id}`)
        .then(
            // response => console.log('RESPONSE!!!!', response))
            response => res.status(200).json(response.data.urls.full))
        .catch(err => {res.status(500).json(err)});
    };

module.exports = {
    getWalls
}