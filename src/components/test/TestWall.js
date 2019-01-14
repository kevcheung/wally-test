import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getWalls} from '../../ducks/unsplashReducer';
// import Unsplash, { toJson } from 'unsplash-js';

class Test extends Component {
  constructor(){
    super();
    this.state = {
      randomImage: ''
    }
  }

componentDidMount() {
  this.props.getWalls();
}


  render() {
    console.log('PROPS!!!!', this.props);
    return (
        <div className="App">
          <img src={this.props.unsplash.walls} alt="random wall" width="1920" height="1080"></img>
        </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getWalls})(Test);

// export default Test;