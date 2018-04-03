import React, { Component } from 'react';
import axios from 'axios';

class Tweet extends Component{

    render () {
        return(
            <div className="tile">
                <p>{this.props.tweet.tweet}</p>
                <h3 className="userer">@{this.props.tweet.user} <p className="times">{this.props.tweet.created_at}</p> </h3>
            </div>
        )
    }
}

export default Tweet