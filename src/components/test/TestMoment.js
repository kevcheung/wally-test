import React, { Component } from 'react';
// import moment from 'moment'; //MOMENT IS NO LONGER NECESSARY!!!!

class TestMoment extends Component {
    // constructor(props){
    //     super(props);
    //     // var d = new Date();
    //     // var h = d.getHours();
    //     // var m = d.getMinutes();
    //     // var s = d. getSeconds();
    //     this.
        state = { //removed the constructor() function, you do not necessarily need it, my refactor is 100% equivalent to initializing site with the constructor() function.
            time: new Date().toLocaleTimeString() 
        };
    // }
    componentDidMount(){
        // this.newInterval();
        setInterval(() => {
            this.setState({ 
                time: new Date().toLocaleTimeString() //THIS SHOULD RETURN A STRING!!!!
            })}, 1000);
    }
    
    render() {
        return (
            <div id="time">
                {this.state.time}
            </div>
        );
    }
}

export default TestMoment;