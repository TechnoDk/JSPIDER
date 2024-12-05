import { useState } from "react";
import ChildA from "./ChildA";                    
import ChildB  from "./ChildB"
import ChildC from "./ChildC";
const Parent = () => {
    //  let data1 = "hello world!! ,I am props";
    let data = [10, 20, 30, 40]
    let user = {
        id: 10,
        ename: 'Chandan'
    };
    function Increment() {
        console.log("Jai Shree Ram🙏🙏 ");
     document.write(" <h1>Jai Shree Ram🙏 </h1> Hello Wolrd  💕!!")
    
  }


    function Display() {
    console.log("i am display function");
    
    }
    

    // ChildC JSX

    let [state, setState] = useState("Parent");
    return (
        <div>
            {/* <ChildA abc={data} /> */}
            
            
            {/* <ChildA dbData={data} abc={data1} /> */}
            {/* <ChildA propVal={{data,user}} /> */}
            {/* <ChildB fun={Display } fun1={Increment} /> */}
            <hr />
            <ChildC setterFun={setState} /> {state}
            
        </div>
    )
}
export default Parent;