class TweetsController < ApplicationController
    def index
        @tweets = Tweet.order('created_at DESC')
        render json: @tweets
    end

    def create
        @tweet = Tweet.new(tweet_params)
        @tweet.save
        render json: @tweet
    end

    def show
        @tweet = Tweet.find(params[:id])
        render json: @tweet
    end

    def update 
        @tweet = Tweet.find(params[:id])
        @tweet.update_attributes(tweet_params)
        render json: @tweet
    end

    private

    def tweet_params
        params.permit(:user,:tweet)
    end

end