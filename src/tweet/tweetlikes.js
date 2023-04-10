import React, {useState} from 'react';

function TweetLikes(props) {
let likes = parseInt(props.likes)

//anything variable which changes in component
//must be declared as state
//stateName, functionwhichcanchangethisstate
let [likeState, updateLikeState] = useState(likes)


let changeLikes =()=>{
    //likeState = 45
    //updateLikeState(just_supply_me_the_new_value_of_state)
    console.log(typeof likeState)
    updateLikeState(likeState + 1)
}

    return ( 
        <span>
            <button onClick={changeLikes}>{likeState} Likes </button>
        </span>
     );
}

export default TweetLikes;