import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(`https://api.github.com/users/vishalraghav0289`)
        .then((res)=>res.json())
        .then((data)=>{
            console.table(data);
            setData(data);

        })
    },[])
  return (
    <div>Github follower:{data.followers}</div>
  
  )
}

export default Github