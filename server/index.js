require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require("body-parser");
// const moment = require('moment');
// const Unsplash = require('unsplash-js').default;

// const access_id = process.env.UNSPLASH_ACCESS;
// const secret_id = process.env.UNSPLASH_SECRET;
// const redirect_url = process.env.CALLBACK_URL;
const port = process.env.PORT || 3001;
const app = express();

const { getWalls } = require(`${__dirname}/controllers/unsplashCtrl`);
const { getZip, getName, getWeather } = require(`${__dirname}/controllers/openWeatherCtrl`);
const { getForsmatic, theySaid } = require(`${__dirname}/controllers/quoteCtrl`);

app.use(cors());
app.use(json());
app.use(express.static(`${__dirname}/../build`))

app.get('/api/getWalls', getWalls);
app.get('/api/getZip/:searchTerm', getZip);
app.get('/api/getName/:searchTerm', getName);
app.get('/api/getWeather', getWeather);
app.get('/api/getForsmatic', getForsmatic);
app.get('/api/theySaid', theySaid);
// app.get('/api/getWalls', () => console.log("TEST"));

app.listen(port, () => {
    console.log(`${port} I READ YOU`);
  });