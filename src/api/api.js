import React, { useEffect, useState } from 'react'
import axios from  'axios'

function ConsumeAPI() {


    let [allusers, updateAllusers]=useState([])


    useEffect(()=>{
        //i am executed only once before 
        //view is rendered if 2nd parameter i.e. [] is empty

        //I am execute only once before view is rendered
        callAPI()
    },[])

    let callAPI =()=>{
        console.log("I am executed only once!")
        axios.get("https://jsonplaceholder.typicode.com/users")
            //then is executed if response is coming
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                updateAllusers(response.data)
            })
            //catch is execute if error happen
            .catch(()=>{})
    }

    let renderUsers=()=>{
        return allusers.map((user)=>{
            console.log(user)
            return(
                <li key={user.id}>
                    {user.name}
                </li>
            )
        })
    }

    return ( 
        <div>
            <h1>Display response from API</h1>
            <h3>Length of allusers: {allusers.length}</h3>
            <ol>
                {renderUsers()}
            </ol>
        </div>
     );
}

export default ConsumeAPI;