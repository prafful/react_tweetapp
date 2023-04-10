import React from 'react';
import Logo from '../tweet/logo/logo';
import TweetList from '../tweet/tweetlist';

function RootComponent() {
    return ( 
      <div style={{border: "1px solid red", 
                  borderRadius: "5px", 
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center" }}>
        <Logo></Logo>
        <TweetList></TweetList>
      </div>
     );
}

export default RootComponent;