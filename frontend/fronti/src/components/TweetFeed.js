import React, { Component } from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import TweetForm from './TweetForm';
import update from 'immutability-helper'

export default class TweetFeed extends Component{
    constructor(props){
        super(props)
        this.state = {
            tweets: []
        }
    }

    onSubmit = (tweet) =>{
        axios.post('http://localhost:3001/tweets', tweet )
        .then(response =>{
          const tweets = update(this.state.tweets, { $splice: [[0, 0, response.data]]})
          this.setState({tweets: tweets})
          })
          .catch(error =>
            {
              console.error(error);
            })
    }

    componentDidMount(){
        axios.get('http://localhost:3001/tweets.json')
        .then(response => {
            this.setState({tweets: response.data})
        })
        .catch(error => console.log(error))
    }

    render () {
        return(
          <div>
          <div>
            <TweetForm/>
          </div>
          <div>
                {
                    this.state.tweets.map((tweet)=>(
                        <Tweet key={tweet.id} tweet={tweet}/>
                    ))
                }
          </div>
          </div>
        )
    }
}
