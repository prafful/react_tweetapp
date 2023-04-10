import React from 'react';

function TweetAuthor(props) {

    let author = props.author

    return ( 
        <div style={{
                    border:"1px solid brown"  ,
                    margin:"5px",
                    padding:"5px"
        }}>
            by {author}
        </div>
     );
}

export default TweetAuthor;