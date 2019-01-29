import React, { Component } from 'react';
import axios from 'axios';

class TestQuote extends Component {
    state = {
        quote: []
    }
    // showForsmatic = this.showForsmatic.bind(this);
    theySaid = this.theySaid.bind(this);

showForsmatic(){
    axios.get("/api/getForsmatic")
        .then(response => {
            console.log('QUOTE!!!!', response)
            this.setState({
                quote: response.data
            })
        })
}

theySaid(){
    axios.get("/api/theySaid")
        .then(response => {
            console.log('QUOTE!!!!', response)
            this.setState({
                quote: [response.data.contents.quotes[0]]
                // author: response.data.contents.quotes[0].author
            })
        })
}

componentDidMount(){
    // this.showForsmatic();
    this.theySaid();
}

    render() {
        const quoteOfDay = this.state.quote.map(({author, quote, index}) => {
            return (
                <div key = {index}>
                    <div>
                        {quote}
                        {author}
                    </div>
                </div>
            )
        })
        return (
            <div>
                {quoteOfDay}
                {/* {this.state.quote}
                {this.state.author} */}
            </div>
        );
    }
}

export default TestQuote;