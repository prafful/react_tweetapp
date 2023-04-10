import React from 'react';
import TweetMessage from './tweetmessage';
import TweetAuthor from './tweetauthor';
import TweetAction from './tweetaction';

function Tweet(props) {

    let score = 88

    return (  
        <div>
            Tweet:
            <TweetMessage blowme={props.blow}></TweetMessage>
            <TweetAuthor author={props.author}></TweetAuthor>
            <TweetAction likes={props.likes} dislikes={props.dislikes}></TweetAction>
            <hr></hr>
        </div>
    );
}

export default Tweet;