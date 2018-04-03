import React, { Component } from 'react';
import axios from 'axios';

class TweetForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            tweet: ''
        };

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeTweet= this.onChangeTweet.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeUser =(e)=>{
        let user = e.target.value;
        this.setState({user});
    }

    onChangeTweet =(e)=>{
        let tweet = e.target.value;
        this.setState({tweet});
    }

    onSubmit (e){
        e.preventDefault();

        axios.post('https://examen2backendz.herokuapp.com/tweets', this.state )
        .then(response =>{
            this.setState({ user: '', tweet: '' });
            this.props.onState(response.data.tweet);
          })
          .catch(error =>
            {
              console.error(error);
            });
    }

    render(){
        return (
            <form>
                <input
                  type="text"
                  name="user"
                  placeholder="@User"
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
