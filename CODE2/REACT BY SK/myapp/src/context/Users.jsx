import React from 'react'
import { Global } from './Context';
import { createContext } from 'react';
 


const Users = () => {
    let Users = createContext(Global);
    console.log(Users);
    

  return (
      <div>
          
      <h1>Users</h1>
    </div>
  )
}

export default Users;
