import React, { useEffect, useState } from 'react'

const SideEffect = () => {
    let [count, setCount] = useState(0);
    // ! Syntax ---> useEffect(()=>{},[dependency arr]);

    //! Render
    useEffect(() => {
        console.log("render");
        
    })

    //! ComponentDidMount 
    useEffect(() => {
        console.log("COMPONENT MOUNT ");

        return () => {
            //componentWillUnmount()
            console.log("COMPONENT UNMOUNTED");
            
        }
        
    }, [])
    
    //! componentDidUpdate
    useEffect(() => {
        console.log("Updated");

        return () => {//getSnapshotBeforeUpadte()
            console.log("previous state was",count);
            
        }
        
    }, [count])//Depend on count variable bcz of depenedency
    
    

  return (
    <div>
          <h1>Hello Side Effect 1</h1>
          <h2>Counter {count}</h2>
          <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default SideEffect;
