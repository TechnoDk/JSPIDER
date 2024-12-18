import { useRef } from "react";
const RefExample = () => {
    console.log(useRef());//{current: undefined}
    let demoRef = useRef();
    function changeBG() {
        console.log(demoRef);//{current: h1}
        demoRef.current.style.backgroundColor ="Red";
        demoRef.current.style.color ="white";
        

        
    };
    
    return (
        <div>
            <h1 ref={demoRef}> Learn RefExample</h1>
            <button onClick={changeBG}>Click</button>
        </div>
    );
    
};
export default RefExample;