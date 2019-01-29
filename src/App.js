import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TestWall from './components/test/TestWall';
import TestMoment from './components/test/TestMoment';
import TestWeather from './components/test/TestWeather';
import TestQuote from './components/test/TestQuote';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <TestWall /> */}
          {/* <TestMoment /> */}
          {/* <TestWeather /> */}
          <TestQuote />
        </div>
      </Provider>
    );
  }
}

export default App;
