import React from 'react';

function TweetAuthor(props) {

    let author = props.author

    return ( 
        <div>
            by {author}
        </div>
     );
}

export default TweetAuthor;