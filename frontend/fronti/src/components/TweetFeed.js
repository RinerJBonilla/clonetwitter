import React, { Component } from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import TweetForm from './TweetForm';
import update from 'immutability-helper'

export default class TweetFeed extends Component{
    constructor(){
        super();
        this.state = {
            tweets: []
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount(){
        axios.get('https://examen2backendz.herokuapp.com/tweets.json')
        .then(response => {
            this.setState({tweets: response.data})
        })
        .catch(error => console.log(error))
    }

    onSubmit(tweet) {
        //tweet.id = this.state.tweets.length + 1;
        const tweets = update(this.state.tweets, {
            $splice: [[0, 0, tweet]]
        })
        this.setState({
            tweets: tweets
        })
    }

    render () {
        return(
          <div>
            <TweetForm onSubmit={this.onSubmit}/>
                {
                    this.state.tweets.map((tweet)=>(
                        <Tweet key={tweet.id} tweet={tweet}/>
                    ))
                }
            </div>    
        )
    }
}
