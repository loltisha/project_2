import React, { Component } from 'react';

class Quotes extends Component {
    render(){
        return(
            <p>{this.props.quoteText}</p> 
        )
    }
}
export default Quotes;