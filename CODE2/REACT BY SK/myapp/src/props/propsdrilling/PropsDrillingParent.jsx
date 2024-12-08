import React from "react";
import Child1 from "./Child1";
const PropsDrilling = () => {
    let user = [
        { id: 20, ename: "Chandan" },
        { id: 22, ename: "Hashmukh" },
        
    ]
    
    

    return (
        <div>
             <h1>hello world!!😎</h1>
             
            
            <Child1 data={user}/>
              </div>
    )
}
export default PropsDrilling;
