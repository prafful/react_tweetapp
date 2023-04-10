import React from 'react';
import Tweet from './tweet';

function TweetList() {
    return (
        <div>
            <h3>List of tweet components will come here!</h3>
            <Tweet blow="I am working on Chat GPT API."
                likes="8"
                dislikes="1"
                author="OBB"
            ></Tweet>
            <Tweet blow="Working with pandas and Python is fun."
                likes="88"
                dislikes="10"
                author="OMG"
            ></Tweet>
            <Tweet blow="I will create tweet app."
                likes="87"
                dislikes="14"
                author="OBBO"
            ></Tweet>
            <Tweet blow="I will create API using Node and Express."
                likes="48"
                dislikes="5"
                author="WYS"
            ></Tweet>

        </div>
    );
}

export default TweetList;