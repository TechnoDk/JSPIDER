import React from 'react'
import ContextChildA from './ContextChildA';
import { createContext } from 'react';

//step:1 Creating a context
//createcontext returns context object
export let GlobalData = createContext();


const ContextParent = () => {
    console.log(GlobalData);//it will print context object

    let data = [
        { id: 1, text: "Hello" },
        {id:2,text:"Hi"},
    ]
    
  return (
      <div>
          <h1>Paarent Context</h1>

          {/* Step 2: Providing a context */}
          <GlobalData.Provider value={data}>
              <ContextChildA/>
          </GlobalData.Provider>
      
    </div>
  )
}

export default ContextParent;
