import React, { Component } from 'react';
import axios from 'axios';

class TweetForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: props.tweet ? props.tweet.user: '',
            tweet: props.tweet ? props.tweet.tweet: ''
        };

        //this.onChangeUser = this.onChangeUser.bind(this);
        //this.onChangeTweet= this.onChangeTweet.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeUser =(e)=>{
        let user = e.target.value;
        this.setState({user});
    }

    onChangeTweet =(e)=>{
        let tweet = e.target.value;
        this.setState({tweet});
    }

    onSubmit =(e)=>{
        e.preventDefault();
        const tweet = {user: this.state.user,tweet: this.state.tweet};
        this.props.onSubmit(tweet);
    };

    render(){
        return (
            <form>
                <input
                  type="text"
                  name="user"
                  placeholder="by User"
                  onChange={this.onChangeUser}
                  value={this.state.user}
                />
                <input
                  type="textarea"
                  name="tweet"
                  placeholder="tweet context"
                  onChange={this.onChangeTweet}
                  value={this.state.tweet}
                />
                <button type="submit" onClick={this.onSubmit} >
                  Post Tweet
                </button>
            </form>
        );
    }
}

export default TweetForm
