import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [count, setCount]= useState(1)


    useEffect(()=>{
     setCount(count + 1)
     console.log("hello form useffect");
     
    },[])
    console.log("this is buttom log");
    
  return (
    <div>
      <h5>hello world!</h5>
      <p>count : {count}</p>
    </div>
  )
}

export default Profile

// assignment explore useParams hook in react
