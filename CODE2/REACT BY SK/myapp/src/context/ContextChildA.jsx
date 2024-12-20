import React from 'react'
import ContextChildB from './ContextChildB';
const ContextChildA = () => {
  return (
      <div>
          <h1>Hello Child A</h1>
      <ContextChildB/>
    </div>
  )
}

export default ContextChildA;
