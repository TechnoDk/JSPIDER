import React, { createContext } from 'react'

export let Global = createContext(); 


const Context = (x) => { // Destructuring { children } and without destructing both
    // console.log(children);
    console.log(x.children);
        

    let data = [{ id: 1, ename: "John" },
                {id:2,ename:"Bromhn"},
 ]

  return (
    <Global.Provider value={data}>
          {/* {children} */}
          {x.children}
    </Global.Provider>
  )
}

export default Context;
