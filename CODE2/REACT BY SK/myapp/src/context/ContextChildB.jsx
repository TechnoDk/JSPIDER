import  { useContext } from 'react';
import { GlobalData } from './ContextParent';


const ContextChildB = () => {
   let val= useContext(GlobalData);
  console.log(val);
  
  return (
      <div>
          <h1>Consuming Data From Context</h1>
          {val.map((ele) => {
              let { id, text } = ele;
           return(
              <section key={id}>
                  <h1>{text}</h1>
                  </section>
               )
          })} 
          
     
    </div>
  )
}

export default ContextChildB;
