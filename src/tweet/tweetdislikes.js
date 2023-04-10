import React, {useState} from 'react';

function TweetDisLikes(props) {
let dislikes = parseInt(props.dislikes)
let [dislikeState, updateDislike] = useState(dislikes)

let changeDislike =()=>{
    updateDislike(dislikeState + 1)
}

    return ( 
        <span>
            <button onClick={changeDislike}>{dislikeState} DisLikes </button>
        </span>
     );
}

export default TweetDisLikes;