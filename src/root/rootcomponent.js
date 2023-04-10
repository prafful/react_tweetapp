import React from 'react';
import Logo from '../tweet/logo/logo';
import TweetList from '../tweet/tweetlist';
import ConsumeAPI from '../api/api';

function RootComponent() {
    return ( 
      <div style={{border: "1px solid red", 
                  borderRadius: "5px", 
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center" }}>
        <Logo></Logo>
        <TweetList></TweetList>
     <ConsumeAPI></ConsumeAPI>
      </div>
     );
}

export default RootComponent;