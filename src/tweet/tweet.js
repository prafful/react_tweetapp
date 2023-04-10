import React from 'react';
import TweetMessage from './tweetmessage';
import TweetAuthor from './tweetauthor';
import TweetAction from './tweetaction';

function Tweet(props) {

    let score = 88

    return (
        <div style={{
                    border: "1px solid blue",
                    margin: "10px",
                    padding: "5px",
                    display:"flex",
                    flexDirection: "column" 
                }}>
            <span style={{
                        border:"1px solid lightblue",
                        padding:"5px"
                        }}>
                <TweetMessage blowme={props.blow}></TweetMessage>
            </span>
            <span style={{
                        display:"flex",
                        border:"1px solid purple",
                        margin:"10px"
                        }}>
                <TweetAuthor author={props.author}></TweetAuthor>
                <TweetAction likes={props.likes} dislikes={props.dislikes}></TweetAction>
            </span>

       
        </div>
    );
}

export default Tweet;