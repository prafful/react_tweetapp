import React from 'react';
import Logo from '../tweet/logo/logo';
import TweetList from '../tweet/tweetlist';

function RootComponent() {
    return ( 
      <div>
        <Logo></Logo>
        <TweetList></TweetList>
      </div>
     );
}

export default RootComponent;