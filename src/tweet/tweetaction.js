import React from 'react';
import TweetLikes from './tweetlikes';
import TweetDisLikes from './tweetdislikes';

function TweetAction(props) {

    let message = "something"

    let changeMessage = ()=>{
        console.log("changeMessage is called")
        message = "anything"
        console.log("message variable updated")
    }

    return ( 
        <div style={{
          border:"1px solid brown"  ,
          margin:"5px",
          padding:"5px"
        }}>
          <TweetLikes likes={props.likes}></TweetLikes>
          <TweetDisLikes dislikes={props.dislikes}></TweetDisLikes>
          <br />
          Message: {message}
          <button onClick={changeMessage}>Change Message</button>
        </div>
     );
}

export default TweetAction;