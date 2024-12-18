import React, { useEffect, useState } from 'react'

const SideEffect2 = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Mounted");
        
        let s1=setInterval(() => {
           console.log("Hello world");
           
        }, 2000)
        
        return () => {
            console.log("Unmounted");
            
            clearInterval(s1)
        }
   },[])





  return (
    <div>
          <h1>  Hello Side Effect 2 <br />Counter{count }</h1>
          <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}

export default SideEffect2;
