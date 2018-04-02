import React, { Component } from 'react';
import axios from 'axios';

class Tweet extends Component{
    render () {
        return(
            <div>
                <h4>{this.props.tweet.tweet}</h4>
                <p>{this.props.tweet.user}</p>
            </div>
        )
    }
}

export default Tweet